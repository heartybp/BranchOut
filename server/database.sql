-- ABOUT THIS DATABASE: PLEASE READ!!

-- Main Objects in the Database
    -- Students: Users who are students.
    -- Mentors: Users who are mentors.
    -- Universities: Represents universities that users (students or mentors) are associated with.
    -- Majors: Represents academic majors that students are pursuing.
    -- Work Experiences: Tracks the professional experiences of users.
    -- Connections: Represents connections between users (e.g., friendships or professional relationships).
    -- Mentorship Requests: Tracks requests from mentees to mentors.
    -- Mentorship Groups: Groups created by mentors to manage multiple mentees.
    -- Posts: User-generated content, such as updates or articles.
    -- Questions & Answers: A Q&A feature where users can ask and answer questions.
    -- Group Messages: Messages sent within mentorship groups.


-- Create database
CREATE DATABASE networkingapp;

\c networkingapp;

-- Create universities table X
CREATE TABLE IF NOT EXISTS universities (
    university_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT
);

-- Create majors table X
CREATE TABLE IF NOT EXISTS majors (
    major_id TEXT PRIMARY KEY,
    name TEXT NOT NULL
);

-- Create students table X
CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL, -- change from plain text to hash later
    university_id TEXT REFERENCES universities(university_id),
    major_id TEXT REFERENCES majors(major_id),
    grade_level TEXT,
    expected_graduation_date DATE,
    resume_url TEXT,
    bio TEXT
);

-- Create mentors table X
CREATE TABLE IF NOT EXISTS mentors (
    mentor_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL, -- change from plain text to hash later
    company TEXT,
    job_title TEXT,
    years_of_experience INT,
    university_id TEXT REFERENCES universities(university_id),
    expertise_areas TEXT[],
    max_mentees INT,
    bio TEXT
);

-- Create work experiences table X
CREATE TABLE IF NOT EXISTS work_experiences (
    experience_id SERIAL PRIMARY KEY,
    experience_type TEXT CHECK (experience_type IN ('student', 'mentor')),
    experience_holder_id INT NOT NULL,
    company TEXT,
    job_title TEXT,
    description TEXT,
    date_started DATE,
    date_ended DATE,
    is_current BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (experience_holder_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (experience_holder_id) REFERENCES mentors(mentor_id) ON DELETE CASCADE
);

-- Create connections table
CREATE TABLE IF NOT EXISTS connections (
    connection_id SERIAL PRIMARY KEY,
    requester_type TEXT CHECK (requester_type IN ('student', 'mentor')),
    requester_id INT NOT NULL,
    receiver_type TEXT CHECK (receiver_type IN ('student', 'mentor')),
    receiver_id INT NOT NULL,
    status TEXT DEFAULT 'pending',
    CONSTRAINT unique_connection UNIQUE (requester_id, receiver_id, requester_type, receiver_type)
);

-- Create mentorship requests table
CREATE TABLE IF NOT EXISTS mentorship_requests (
    request_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    mentor_id INT REFERENCES mentors(mentor_id),
    status TEXT DEFAULT 'pending',
    message TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create mentorship groups table
CREATE TABLE IF NOT EXISTS mentorship_groups (
    group_id SERIAL PRIMARY KEY,
    mentor_id INT REFERENCES mentors(mentor_id),
    name TEXT NOT NULL,
    description TEXT,
    max_mentees INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create mentorship group members table
CREATE TABLE IF NOT EXISTS mentorship_group_members (
    group_id INT REFERENCES mentorship_groups(group_id),
    student_id INT REFERENCES students(student_id),
    joined_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (group_id, student_id)
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    post_id SERIAL PRIMARY KEY,
    poster_type TEXT CHECK (poster_type IN ('student', 'mentor')),
    poster_id INT NOT NULL,
    content TEXT NOT NULL,
    media_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
    question_id SERIAL PRIMARY KEY,
    -- asker_type TEXT CHECK (asker_type IN ('student', 'mentor')),
    asker_id INT NOT NULL REFERENCES students(student_id),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create answers table
CREATE TABLE IF NOT EXISTS answers (
    answer_id SERIAL PRIMARY KEY,
    question_id INT REFERENCES questions(question_id),
    answerer_type TEXT CHECK (answerer_type IN ('student', 'mentor')),
    answerer_id INT NOT NULL,
    content TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create group messages table
CREATE TABLE IF NOT EXISTS group_messages (
    message_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES mentorship_groups(group_id),
    sender_type TEXT CHECK (sender_type IN ('student', 'mentor')),
    sender_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);






-- INSERT TEST DATA




BEGIN;

INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucb', 'University of California, Berkeley', 'Berkeley, CA'),
    ('ucla', 'UCLA', 'Los Angeles, CA'),
    ('csulb', 'Cal State Long Beach', 'Long Beach, CA'),
    ('csuf', 'Cal State Fullerton', 'Fullerton, CA');

INSERT INTO majors (major_id, name) VALUES
    ('business', 'Business'),
    ('biology', 'Biology'),
    ('cs', 'Computer Science'),
    ('sociology', 'Sociology'),
    ('economics', 'Economics'),
    ('ee', 'Electrical Engineering');

COMMIT;


-- Users and Profiles in one transaction
BEGIN;

-- Insert Students
INSERT INTO students (username, email, first_name, last_name, password, university_id, major_id, grade_level, expected_graduation_date, resume_url, bio) VALUES
    ('student1', 'student1@example.com', 'John', 'Doe', 'password1', 'uci', 'business', 'Junior', '2025-05-15', 'http://example.com/resume1', 'Bio for John Doe'),
    ('student2', 'student2@example.com', 'Jane', 'Smith', 'password2', 'uci', 'biology', 'Sophomore', '2026-05-15', 'http://example.com/resume2', 'Bio for Jane Smith'),
    ('student3', 'student3@example.com', 'Alice', 'Johnson', 'password3', 'uci', 'cs', 'Senior', '2024-05-15', 'http://example.com/resume3', 'Bio for Alice Johnson'),
    ('student4', 'student4@example.com', 'Bob', 'Brown', 'password4', 'uci', 'sociology', 'Freshman', '2027-05-15', 'http://example.com/resume4', 'Bio for Bob Brown'),
    ('student5', 'student5@example.com', 'Charlie', 'Davis', 'password5', 'uci', 'economics', 'Junior', '2025-05-15', 'http://example.com/resume5', 'Bio for Charlie Davis'),
    ('student6', 'student6@example.com', 'Diana', 'Evans', 'password6', 'uci', 'ee', 'Sophomore', '2026-05-15', 'http://example.com/resume6', 'Bio for Diana Evans'),
    ('student7', 'student7@example.com', 'Ethan', 'Harris', 'password7', 'uci', 'business', 'Senior', '2024-05-15', 'http://example.com/resume7', 'Bio for Ethan Harris'),
    ('student8', 'student8@example.com', 'Fiona', 'Clark', 'password8', 'ucb', 'biology', 'Junior', '2025-05-15', 'http://example.com/resume8', 'Bio for Fiona Clark'),
    ('student9', 'student9@example.com', 'George', 'Lewis', 'password9', 'ucb', 'cs', 'Sophomore', '2026-05-15', 'http://example.com/resume9', 'Bio for George Lewis'),
    ('student10', 'student10@example.com', 'Hannah', 'Walker', 'password10', 'ucla', 'sociology', 'Senior', '2024-05-15', 'http://example.com/resume10', 'Bio for Hannah Walker'),
    ('student11', 'student11@example.com', 'Ian', 'Hall', 'password11', 'csulb', 'economics', 'Junior', '2025-05-15', 'http://example.com/resume11', 'Bio for Ian Hall'),
    ('student12', 'student12@example.com', 'Julia', 'Young', 'password12', 'csuf', 'ee', 'Sophomore', '2026-05-15', 'http://example.com/resume12', 'Bio for Julia Young'),
    ('student13', 'student13@example.com', 'Kevin', 'Allen', 'password13', 'csuf', 'business', 'Senior', '2024-05-15', 'http://example.com/resume13', 'Bio for Kevin Allen');


-- Insert Mentors
INSERT INTO mentors (username, email, first_name, last_name, password, company, job_title, years_of_experience, university_id, expertise_areas, max_mentees, bio) VALUES
    ('mentor1', 'mentor1@example.com', 'Michael', 'Scott', 'password14', 'Tech Corp', 'Senior Software Engineer', 10, 'uci', ARRAY['Software Development', 'AI'], 5, 'Bio for Michael Scott'),
    ('mentor2', 'mentor2@example.com', 'Pam', 'Beesly', 'password15', 'Health Inc', 'Biologist', 8, 'ucb', ARRAY['Biology', 'Genetics'], 3, 'Bio for Pam Beesly');


-- Insert Questions
INSERT INTO questions (asker_id, title, content, is_anonymous, created_at, updated_at, is_deleted) VALUES
    (5, 'How to prepare for a software engineering interview?', 'I have an interview next week. Any tips?', false, NOW(), NOW(), false),
    (6, 'Best resources for learning biology?', 'Looking for recommendations for online courses.', false, NOW(), NOW(), false),
    (7, 'How to balance studies and part-time work?', 'I am struggling to manage my time.', false, NOW(), NOW(), false);


COMMIT;


BEGIN;
-- Insert Work Experience
INSERT INTO work_experiences (experience_type, experience_holder_id, company, job_title, description, date_started, date_ended, is_current) VALUES 
(
    'student',
    1,  -- This should be an existing student_id in your students table
    'Google',
    'Software Engineering Intern',
    'Worked on the Google Cloud Platform team developing microservices for data processing pipelines. Implemented new features in Java and Go, participated in code reviews, and collaborated with senior engineers on system architecture improvements.',
    '2023-06-01',
    '2023-08-31',
    FALSE
),
(
    'student',
    2,  -- This should be an existing student_id in your students table
    'Google',
    'Data Analyst Intern',
    'Worked on Ad data at Google.',
    '2023-07-01',
    '2023-10-22',
    FALSE
),
(
    'mentor',
    1,  -- This should be an existing student_id in your students table
    'Google',
    'SWE I',
    'Software Engineer at google working on the Google Cloud platform.',
    '2023-07-01',
    '2027-11-22',
    TRUE
);
COMMIT;


BEGIN;
-- Insert connections
INSERT INTO connections (requester_type, requester_id, receiver_type, receiver_id, status) VALUES 
(
    'student',
    1,
    'student',
    2,
    'pending'
),
(
    'student',
    1,
    'mentor',
    2,
    'pending'
),
(
    'mentor',
    1,
    'mentor',
    2,
    'pending'
);
COMMIT;


BEGIN;
-- Insert mentor requests
INSERT INTO mentorship_requests (student_id, mentor_id, status, message) VALUES 
(
    1,
    1,
    'pending',
    'I would like guidance on advanced database design concepts.'
),
(
    2,
    2,
    'accepted',
    'Looking for mentorship in web development, particularly React and Node.js.'
),
(
    3,
    1,
    'pending',
    'Seeking career advice for transitioning into data science.'
),
(
    4,
    2,
    'rejected',
    'Would like help with machine learning algorithms and practical applications.'
),
(
    5,
    2,
    'accepted',
    'Need guidance on networking in the tech industry and finding internships.'
),
(
    6,
    1,
    'pending',
    'Interested in learning more about cloud architecture and AWS services.'
);
COMMIT;


BEGIN;
--Insert mentorship groups
INSERT INTO mentorship_groups (mentor_id, name, description, max_mentees)
VALUES 
(
    1,
    'Web Development Fundamentals',
    'A group focused on learning HTML, CSS, JavaScript and basic web development principles.',
    8
),
(
    2,
    'Data Science Workshop',
    'Practical applications of data science techniques including Python, R, and machine learning algorithms.',
    6
),
(
    1,
    'Career Development Circle',
    'Support group for tech professionals looking to advance their careers or transition into new roles.',
    10
),
(
    2,
    'Full Stack Mastery',
    'Deep dive into full stack development with focus on modern frameworks and best practices.',
    5
);
COMMIT;


BEGIN;
--Insert mentorship group members
INSERT INTO mentorship_group_members (group_id, student_id)
VALUES 
(
    1,
    2
),
(
    1,
    3
),
(
    4,
    5
),
(
    3,
    1
),
(
    1,
    4
);
COMMIT;
