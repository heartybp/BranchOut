-- ABOUT THIS DATABASE: PLEASE READ!!
-- Please refere to the testing.sql file for testing the the tables
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

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL,
    university_id TEXT REFERENCES universities(university_id),
    bio TEXT
);

-- Create students table X
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY REFERENCES users(user_id) ON DELETE CASCADE,
    major_id TEXT REFERENCES majors(major_id),
    grade_level TEXT,
    expected_graduation_date DATE,
    resume_url TEXT,
    bio TEXT
);

-- Create mentors table X
CREATE TABLE IF NOT EXISTS mentors (
    mentor_id INT PRIMARY KEY REFERENCES users(user_id) ON DELETE CASCADE,
    company TEXT,
    job_title TEXT,
    years_of_experience INT,
    expertise_areas TEXT[],
    max_mentees INT DEFAULT 3,
    bio TEXT
);

-- Create work experiences table X
CREATE TABLE IF NOT EXISTS work_experiences (
    experience_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    company TEXT,
    job_title TEXT,
    description TEXT,
    date_started DATE,
    date_ended DATE,
    is_current BOOLEAN DEFAULT FALSE
);

-- Create connections table (student_id || mentor_id foreign key)
CREATE TABLE IF NOT EXISTS connections (
    connection_id SERIAL PRIMARY KEY,
    requester_id INT NOT NULL REFERENCES users(user_id),
    receiver_id INT NOT NULL REFERENCES users(user_id),
    status TEXT DEFAULT 'pending',
    CONSTRAINT different_users CHECK (requester_id <> receiver_id),
    CONSTRAINT unique_connection UNIQUE (requester_id, receiver_id)
);

-- Create mentorship requests table
CREATE TABLE IF NOT EXISTS mentorship_requests (
    request_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES students(student_id),
    mentor_id INT NOT NULL REFERENCES mentors(mentor_id),
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

-- Create posts table (poster_id foreign key?)
CREATE TABLE IF NOT EXISTS posts (
    post_id SERIAL PRIMARY KEY,
    poster_id INT NOT NULL REFERENCES users(user_id),
    content TEXT NOT NULL,
    media_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create questions table (is the question mapped to a post/thread/dm)
CREATE TABLE IF NOT EXISTS questions (
    question_id SERIAL PRIMARY KEY,
    asker_id INT NOT NULL REFERENCES students(student_id),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create answers table (needs to map to existing question)
CREATE TABLE IF NOT EXISTS answers (
    answer_id SERIAL PRIMARY KEY,
    question_id INT NOT NULL REFERENCES questions(question_id),
    answerer_id INT NOT NULL REFERENCES users(user_id),
    content TEXT NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);

-- Create group messages table (only allow people in the group to join)
CREATE TABLE IF NOT EXISTS group_messages (
    message_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES mentorship_groups(group_id),
    sender_id INT NOT NULL REFERENCES users(user_id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN DEFAULT FALSE
);