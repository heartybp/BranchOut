-- INSERT TEST DATA

-- CHECKING UNIVERSITIES
BEGIN;

INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucb', 'University of California, Berkeley', 'Berkeley, CA'),
    ('ucla', 'UCLA', 'Los Angeles, CA'),
    ('csulb', 'Cal State Long Beach', 'Long Beach, CA'),
    ('csuf', 'Cal State Fullerton', 'Fullerton, CA');

-- Run tests
SELECT * FROM universities;
SELECT * FROM universities WHERE university_id = 'csuf';

-- Cleanup
DELETE FROM universities WHERE university_id = 'csuf';
SELECT * FROM universities;

ROLLBACK;
 

-- CHECKING MAJORS
BEGIN;

INSERT INTO majors (major_id, name) VALUES
    ('business', 'Business'),
    ('biology', 'Biology'),
    ('cs', 'Computer Science'),
    ('sociology', 'Sociology'),
    ('economics', 'Economics'),
    ('ee', 'Electrical Engineering');

-- Run tests
SELECT * FROM majors;
SELECT * FROM majors WHERE major_id = 'cs';

-- Cleanup
DELETE FROM majors WHERE major_id = 'cs';
SELECT * FROM majors;

ROLLBACK;

-- ADD UNIVERSITIES & MAJORS

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

-- CHECKING USERS

BEGIN;

INSERT INTO users (username, email, first_name, last_name, password, university_id, bio) VALUES
    ('jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'I am a CS student'),
    ('jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'PhD candidate'),
    ('mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech industry veteran');

-- Run tests
SELECT * FROM users;
SELECT * FROM users WHERE university_id = 'uci';

-- Cleanup
DELETE FROM users WHERE university_id = 'ucla';
SELECT * FROM users;

ROLLBACK;

SELECT setval(pg_get_serial_sequence('users', 'user_id'), 1, false);

-- CREATE USERS 

BEGIN;

INSERT INTO users (username, email, first_name, last_name, password, university_id, bio) VALUES
    ('jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'I am a CS student'),
    ('jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'PhD candidate'),
    ('mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech industry veteran');

COMMIT;

-- CHECKING STUDENTS

BEGIN;

INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date, resume_url) VALUES
    (1, 'cs', 'Junior', '2026-05-15', 'https://example.com/resume/jsmith'),
    (2, 'ee', 'Senior', '2025-05-15', 'https://example.com/resume/jdoe');

-- Run tests
SELECT * FROM students;
SELECT * FROM students WHERE major_id = 'cs';

ROLLBACK;

-- CHECKING MENTORS

BEGIN;

INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Software Engineer', 8, ARRAY['Web Development', 'AI', 'Cloud Computing'], 5);

-- Run tests
SELECT * FROM mentors m JOIN users u ON m.mentor_id = u.user_id;

SELECT * FROM mentors m 
JOIN users u ON m.mentor_id = u.user_id
WHERE 'Web Development' = ANY(m.expertise_areas);

ROLLBACK;

-- CHECKING WORK EXPERIENCE
BEGIN;

INSERT INTO work_experiences (
    user_id, company, job_title, description, date_started, date_ended, is_current
) VALUES
    -- Student internships
    (1, 'Google', 'Software Engineering Intern', 'Worked on search algorithms and frontend development', '2023-06-01', '2023-08-31', false),
    (1, 'Microsoft', 'Product Management Intern', 'Assisted in feature prioritization and user research', '2024-01-15', '2024-04-30', false),
    (2, 'Amazon', 'Research Intern', 'Conducted research on protein folding algorithms', '2023-05-15', '2023-09-15', false),
    (2, 'University Lab', 'Research Assistant', 'Supporting genomics research project', '2023-10-01', NULL, true),
    
    -- Mentor work history
    (3, 'Facebook', 'Senior Software Engineer', 'Led development of news feed optimization algorithms', '2018-03-15', '2022-02-28', false),
    (3, 'Tech Giants Inc.', 'Principal Engineer', 'Architecture design and mentoring junior developers', '2022-03-01', NULL, true),
    
    -- Part-time student jobs
    (1, 'Campus Bookstore', 'Sales Associate', 'Customer service and inventory management', '2022-09-01', '2023-05-31', false),
    (2, 'Local Cafe', 'Barista', 'Preparing coffee and providing customer service', '2023-06-15', NULL, true);

-- Run tests
SELECT * FROM work_experiences;

ROLLBACK;