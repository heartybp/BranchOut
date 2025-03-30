-- INSERT TEST DATA

-------------------------- CHECKING UNIVERSITIES
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
 

-------------------------- CHECKING MAJORS
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

-------------------------- CHECKING USERS

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

-------------------------- CHECKING STUDENTS

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

INSERT INTO users (username, email, first_name, last_name, password, university_id, bio) VALUES
    ('jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'I am a CS student'),
    ('jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'PhD candidate'),
    ('mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech industry veteran');

INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date, resume_url) VALUES
    (1, 'cs', 'Junior', '2026-05-15', 'https://example.com/resume/jsmith'),
    (2, 'ee', 'Senior', '2025-05-15', 'https://example.com/resume/jdoe');

-- Run tests
SELECT * FROM students;
SELECT * FROM students WHERE major_id = 'cs';

ROLLBACK;

-------------------------- CHECKING MENTORS

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

INSERT INTO users (username, email, first_name, last_name, password, university_id, bio) VALUES
    ('jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'I am a CS student'),
    ('jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'PhD candidate'),
    ('mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech industry veteran');

INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Software Engineer', 8, ARRAY['Web Development', 'AI', 'Cloud Computing'], 5);

-- Run tests
SELECT * FROM mentors m JOIN users u ON m.mentor_id = u.user_id;

SELECT * FROM mentors m 
JOIN users u ON m.mentor_id = u.user_id
WHERE 'Web Development' = ANY(m.expertise_areas);

ROLLBACK;

-------------------------- CHECKING WORK EXPERIENCE
BEGIN;

-- Setup: Create a few connections
INSERT INTO connections (requester_id, receiver_id, status) VALUES
    (1, 2, 'pending'),  -- John requesting Jane
    (2, 3, 'pending');  -- Jane requesting Mike

-- View the successful connections
SELECT 'Successfully created valid connections:' AS message;
SELECT c.connection_id, 
       r.first_name || ' ' || r.last_name AS requester, 
       e.first_name || ' ' || e.last_name AS receiver, 
       c.status
FROM connections c
JOIN users r ON c.requester_id = r.user_id
JOIN users e ON c.receiver_id = e.user_id
ORDER BY c.connection_id;

-- Test both constraints in one go
SELECT 'Testing constraints (both should fail):' AS message;

-- 1. Try a self-connection (should fail)
DO $$
BEGIN
    BEGIN
        INSERT INTO connections (requester_id, receiver_id, status) 
        VALUES (1, 1, 'pending');
        
        RAISE NOTICE 'CONSTRAINT TEST FAILED: Self-connection was allowed!';
    EXCEPTION WHEN check_violation THEN
        RAISE NOTICE 'CONSTRAINT TEST PASSED: Self-connection was properly rejected';
    END;
END $$;

-- 2. Try a duplicate connection (should fail)
DO $$
BEGIN
    BEGIN
        INSERT INTO connections (requester_id, receiver_id, status) 
        VALUES (1, 2, 'accepted');
        
        RAISE NOTICE 'CONSTRAINT TEST FAILED: Duplicate connection was allowed!';
    EXCEPTION WHEN unique_violation THEN
        RAISE NOTICE 'CONSTRAINT TEST PASSED: Duplicate connection was properly rejected';
    END;
END $$;

-- Cleanup
ROLLBACK;

-------------------------- CHECKING MENTORSHIP REQUESTS
BEGIN;

-- First ensure we have student and mentor data to work with
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date, resume_url) VALUES
    (1, 'cs', 'Junior', '2026-05-15', 'https://example.com/resume/jsmith'),
    (2, 'ee', 'Senior', '2025-05-15', 'https://example.com/resume/jdoe');

INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Software Engineer', 8, ARRAY['Web Development', 'AI', 'Cloud Computing'], 5);

-- Test Case: Create mentorship requests
INSERT INTO mentorship_requests (student_id, mentor_id, status, message) VALUES
    (1, 3, 'pending', 'Hi, I am interested in learning more about web development and AI. Would you be willing to mentor me?'),
    (2, 3, 'pending', 'I would love your guidance on transitioning from electrical engineering to software engineering.');

-- Verification: Check if mentorship requests were created successfully
SELECT 'Mentorship Requests Created:' AS message;
SELECT 
    mr.request_id,
    s_user.first_name || ' ' || s_user.last_name AS student_name,
    m_user.first_name || ' ' || m_user.last_name AS mentor_name,
    mr.status,
    mr.message,
    mr.created_at
FROM mentorship_requests mr
JOIN students s ON mr.student_id = s.student_id
JOIN users s_user ON s.student_id = s_user.user_id
JOIN mentors m ON mr.mentor_id = m.mentor_id
JOIN users m_user ON m.mentor_id = m_user.user_id
ORDER BY mr.request_id;

-- Test Case: Update request status
UPDATE mentorship_requests 
SET status = 'accepted' 
WHERE student_id = 1 AND mentor_id = 3;

-- Verification: Check if status was updated correctly
SELECT 'After Status Update:' AS message;
SELECT 
    mr.request_id,
    s_user.first_name || ' ' || s_user.last_name AS student_name,
    m_user.first_name || ' ' || m_user.last_name AS mentor_name,
    mr.status
FROM mentorship_requests mr
JOIN students s ON mr.student_id = s.student_id
JOIN users s_user ON s.student_id = s_user.user_id
JOIN mentors m ON mr.mentor_id = m.mentor_id
JOIN users m_user ON m.mentor_id = m_user.user_id
WHERE mr.student_id = 1 AND mr.mentor_id = 3;

-- Test Case: Verify we can get all pending requests for a mentor
SELECT 'Pending Requests for Mike Wilson:' AS message;
SELECT 
    mr.request_id,
    s_user.first_name || ' ' || s_user.last_name AS student_name,
    mr.message
FROM mentorship_requests mr
JOIN students s ON mr.student_id = s.student_id
JOIN users s_user ON s.student_id = s_user.user_id
WHERE mr.mentor_id = 3 AND mr.status = 'pending';

-- Clean up
ROLLBACK;

-------------------------- CHECKING MENTORSHIP GROUPS TABLE
BEGIN;

-- Ensure we have mentor data to work with
INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Software Engineer', 8, ARRAY['Web Development', 'AI', 'Cloud Computing'], 5);

-- Test Case: Create mentorship groups
INSERT INTO mentorship_groups (mentor_id, name, description, max_mentees) VALUES
    (3, 'Web Development Fundamentals', 'Learn the basics of HTML, CSS, and JavaScript to build modern websites', 5),
    (3, 'Machine Learning Study Group', 'Explore ML algorithms and their applications in real-world scenarios', 3),
    (NULL, 'Open Coding Community', 'Community-led group for peer programming and knowledge sharing', 10);

-- Verification: Check if mentorship groups were created successfully
SELECT 'Mentorship Groups Created:' AS message;
SELECT 
    mg.group_id,
    mg.name,
    mg.description,
    mg.max_mentees,
    CASE 
        WHEN mg.mentor_id IS NULL THEN 'Community-led'
        ELSE u.first_name || ' ' || u.last_name
    END AS mentor_name
FROM mentorship_groups mg
LEFT JOIN mentors m ON mg.mentor_id = m.mentor_id
LEFT JOIN users u ON m.mentor_id = u.user_id
ORDER BY mg.group_id;

-- Test Case: Update group details
UPDATE mentorship_groups 
SET description = 'Updated: Learn HTML, CSS, JavaScript, and responsive design principles for modern web applications', 
    max_mentees = 8
WHERE name = 'Web Development Fundamentals';

-- Verification: Check if group was updated correctly
SELECT 'After Group Update:' AS message;
SELECT 
    mg.group_id,
    mg.name,
    mg.description,
    mg.max_mentees
FROM mentorship_groups mg
WHERE mg.name = 'Web Development Fundamentals';

-- Test Case: Verify we can get all groups for a specific mentor
SELECT 'Groups led by Mike Wilson:' AS message;
SELECT 
    mg.group_id,
    mg.name,
    mg.max_mentees
FROM mentorship_groups mg
JOIN mentors m ON mg.mentor_id = m.mentor_id
JOIN users u ON m.mentor_id = u.user_id
WHERE u.first_name = 'Mike' AND u.last_name = 'Wilson';

-- Test Case: Get all community-led groups (no specific mentor)
SELECT 'Community-led Groups:' AS message;
SELECT 
    mg.group_id,
    mg.name,
    mg.description
FROM mentorship_groups mg
WHERE mg.mentor_id IS NULL;

-- Clean up
ROLLBACK;

--------------------------CHECKING MENTORSHIP GROUP MEMBERS
BEGIN;

-- Ensure we have students in the database
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date) VALUES
    (1, 'cs', 'Junior', '2026-05-15'),
    (2, 'ee', 'Senior', '2025-05-15')
ON CONFLICT (student_id) DO NOTHING;

-- Ensure we have mentors in the database
INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Engineer', 8, ARRAY['Web Development', 'AI'], 5)
ON CONFLICT (mentor_id) DO NOTHING;

-- Create/ensure mentorship groups exist
INSERT INTO mentorship_groups (group_id, mentor_id, name, description, max_mentees) VALUES
    (101, 3, 'Web Development', 'Learn web dev basics', 5),
    (102, 3, 'AI Group', 'ML concepts and practice', 3)
ON CONFLICT (group_id) DO UPDATE 
SET name = EXCLUDED.name, description = EXCLUDED.description;

-- Add students to groups with the ability to overwrite join dates
INSERT INTO mentorship_group_members (group_id, student_id, joined_at) VALUES
    (101, 1, NOW()),  -- Student 1 joins Web Dev group
    (101, 2, NOW()),  -- Student 2 joins Web Dev group
    (102, 1, NOW())   -- Student 1 also joins AI group
ON CONFLICT (group_id, student_id) 
DO UPDATE SET joined_at = EXCLUDED.joined_at;

-- Show the memberships
SELECT 'Group Memberships:' AS message;
SELECT 
    g.name AS group_name,
    g.description,
    COUNT(m.student_id) AS member_count
FROM mentorship_groups g
LEFT JOIN mentorship_group_members m ON g.group_id = m.group_id
GROUP BY g.group_id, g.name, g.description
ORDER BY g.name;

-- Show detailed membership
SELECT 'Detailed Memberships:' AS message;
SELECT 
    g.name AS group_name,
    s.student_id,
    m.joined_at
FROM mentorship_group_members m
JOIN mentorship_groups g ON m.group_id = g.group_id
JOIN students s ON m.student_id = s.student_id
ORDER BY g.name, s.student_id;

ROLLBACK;

-------------------------- CHECKING POSTS
BEGIN;

-- Create posts for existing users (assumes users 1, 2, 3 exist)
INSERT INTO posts (poster_id, content, media_url) VALUES
    (1, 'Just finished my CS project!', 'https://github.com/jsmith/project'),
    (2, 'My research paper was published today', 'https://example.com/paper.pdf'),
    (3, 'Hosting a tech workshop next Friday', NULL);

-- View all posts with user info
SELECT 'Posts Created:' AS message;
SELECT 
    p.post_id,
    u.first_name || ' ' || u.last_name AS author,
    p.content,
    p.created_at
FROM posts p
JOIN users u ON p.poster_id = u.user_id
ORDER BY p.created_at DESC;

-- Test update functionality
UPDATE posts 
SET content = 'UPDATED: Hosting a tech workshop on Saturday instead',
    updated_at = NOW()
WHERE poster_id = 3;

-- Test soft delete
UPDATE posts 
SET is_deleted = TRUE
WHERE poster_id = 2;

-- View active posts only
SELECT 'Active Posts Only:' AS message;
SELECT 
    p.post_id,
    u.first_name || ' ' || u.last_name AS author,
    p.content
FROM posts p
JOIN users u ON p.poster_id = u.user_id
WHERE p.is_deleted = FALSE
ORDER BY p.created_at DESC;

ROLLBACK;

-------------------------- CHECKING GROUP MESSAGES
BEGIN;

-- Create universities
INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucla', 'UCLA', 'Los Angeles, CA')
ON CONFLICT (university_id) DO NOTHING;

-- Create majors
INSERT INTO majors (major_id, name) VALUES
    ('cs', 'Computer Science'),
    ('ee', 'Electrical Engineering')
ON CONFLICT (major_id) DO NOTHING;

-- Create users
INSERT INTO users (user_id, username, email, first_name, last_name, password, university_id, bio) VALUES
    (1, 'jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'CS student'),
    (2, 'jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'EE student'),
    (3, 'mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech veteran')
ON CONFLICT (user_id) DO UPDATE 
SET first_name = EXCLUDED.first_name, last_name = EXCLUDED.last_name;

-- Create students and mentor
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date) VALUES
    (1, 'cs', 'Junior', '2026-05-15'),
    (2, 'ee', 'Senior', '2025-05-15')
ON CONFLICT (student_id) DO NOTHING;

INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Engineer', 8, ARRAY['Web Development', 'AI'], 5)
ON CONFLICT (mentor_id) DO NOTHING;

-- Create mentorship groups
INSERT INTO mentorship_groups (group_id, mentor_id, name, description, max_mentees) VALUES
    (101, 3, 'Web Development', 'Learn web dev basics', 5),
    (102, 3, 'AI Study Group', 'ML concepts and practice', 3)
ON CONFLICT (group_id) DO NOTHING;

-- Add students to groups
INSERT INTO mentorship_group_members (group_id, student_id) VALUES
    (101, 1),  -- John joins Web Dev group
    (101, 2),  -- Jane joins Web Dev group
    (102, 1)   -- John also joins AI group
ON CONFLICT (group_id, student_id) DO NOTHING;

-- Insert group messages
INSERT INTO group_messages (group_id, sender_id, content) VALUES
    (101, 3, 'Welcome everyone to the Web Development group! Let me know what topics you want to cover first.'),
    (101, 1, 'Thanks for having me! I''d love to start with CSS Grid and Flexbox.'),
    (101, 2, 'I''m interested in JavaScript frameworks. Could we cover React?'),
    (102, 3, 'Hello AI enthusiasts! Our first session will cover the basics of neural networks.'),
    (102, 1, 'Looking forward to it! I''ve been reading about CNNs - will we cover those?');

-- Display messages with sender info
SELECT 'Group Chat Messages:' AS message;
SELECT 
    g.name AS group_name,
    u.first_name || ' ' || u.last_name AS sender_name,
    CASE 
        WHEN u.user_id = g.mentor_id THEN 'Mentor'
        ELSE 'Student'
    END AS role,
    gm.content,
    gm.created_at
FROM group_messages gm
JOIN mentorship_groups g ON gm.group_id = g.group_id
JOIN users u ON gm.sender_id = u.user_id
ORDER BY g.name, gm.created_at;

-- Test soft delete functionality
UPDATE group_messages
SET is_deleted = TRUE
WHERE sender_id = 2;

-- Show only active messages
SELECT 'Active Messages Only:' AS message;
SELECT 
    g.name AS group_name,
    u.first_name || ' ' || u.last_name AS sender_name,
    gm.content
FROM group_messages gm
JOIN mentorship_groups g ON gm.group_id = g.group_id
JOIN users u ON gm.sender_id = u.user_id
WHERE gm.is_deleted = FALSE
ORDER BY g.name, gm.created_at;

-- Check if senders are members of the group
SELECT 'Validation - Senders are group members:' AS message;
SELECT 
    gm.message_id,
    u.first_name || ' ' || u.last_name AS sender_name,
    g.name AS group_name,
    CASE 
        WHEN u.user_id = g.mentor_id THEN TRUE
        WHEN EXISTS (
            SELECT 1 FROM mentorship_group_members mgm 
            WHERE mgm.group_id = g.group_id AND mgm.student_id = u.user_id
        ) THEN TRUE
        ELSE FALSE
    END AS is_group_member
FROM group_messages gm
JOIN mentorship_groups g ON gm.group_id = g.group_id
JOIN users u ON gm.sender_id = u.user_id
ORDER BY is_group_member DESC, gm.message_id;

ROLLBACK;

-------------------------- CHECKING QUESTIONS TABLE
BEGIN;

-- Create prerequisite data
-- Universities and majors
INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucla', 'UCLA', 'Los Angeles, CA')
ON CONFLICT (university_id) DO NOTHING;

INSERT INTO majors (major_id, name) VALUES
    ('cs', 'Computer Science'),
    ('ee', 'Electrical Engineering')
ON CONFLICT (major_id) DO NOTHING;

-- Create users and students
INSERT INTO users (user_id, username, email, first_name, last_name, password, university_id, bio) VALUES
    (1, 'jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'CS student'),
    (2, 'jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'EE student')
ON CONFLICT (user_id) DO UPDATE 
SET first_name = EXCLUDED.first_name, last_name = EXCLUDED.last_name;

INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date) VALUES
    (1, 'cs', 'Junior', '2026-05-15'),
    (2, 'ee', 'Senior', '2025-05-15')
ON CONFLICT (student_id) DO NOTHING;

-- Insert test questions
INSERT INTO questions (asker_id, title, content, is_anonymous) VALUES
    (1, 'How to prepare for technical interviews?', 'I have an interview coming up with a big tech company. What are some good resources to prepare?', FALSE),
    (2, 'Best resources for learning circuit design', 'Looking for recommendations on textbooks or online courses for advanced circuit design.', FALSE),
    (1, 'Advice on choosing between job offers', 'I received offers from two companies. One is higher pay but less interesting work, the other is lower pay but more exciting projects. How should I decide?', TRUE);

-- Display all questions with asker info
SELECT 'All Questions:' AS message;
SELECT 
    q.question_id,
    q.title,
    q.content,
    CASE 
        WHEN q.is_anonymous THEN 'Anonymous'
        ELSE u.first_name || ' ' || u.last_name
    END AS asker_name,
    u.university_id,
    s.major_id,
    q.created_at
FROM questions q
JOIN students s ON q.asker_id = s.student_id
JOIN users u ON s.student_id = u.user_id
ORDER BY q.created_at DESC;

-- Test question update
BEGIN;

-- Ensure students exist
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date) VALUES
    (1, 'cs', 'Junior', '2026-05-15'),
    (2, 'ee', 'Senior', '2025-05-15')
ON CONFLICT (student_id) DO NOTHING;

-- Insert test questions
INSERT INTO questions (asker_id, title, content, is_anonymous) VALUES
    (1, 'How to prepare for interviews?', 'I have an interview coming up. Any tips?', FALSE),
    (2, 'Resources for circuit design', 'Looking for recommendations for learning materials.', FALSE),
    (1, 'Choosing between job offers', 'Got two offers. How to decide?', TRUE);

-- Display questions with asker info
SELECT 
    q.question_id,
    q.title,
    CASE WHEN q.is_anonymous THEN 'Anonymous' ELSE u.first_name || ' ' || u.last_name END AS asker,
    q.created_at
FROM questions q
JOIN students s ON q.asker_id = s.student_id
JOIN users u ON s.student_id = u.user_id
ORDER BY q.created_at DESC;

-- Test soft delete
UPDATE questions SET is_deleted = TRUE WHERE question_id = 2;

-- Show only active questions
SELECT 'Active Questions:' AS message;
SELECT q.question_id, q.title FROM questions q WHERE is_deleted = FALSE;

ROLLBACK;


-------------------------- CHECKING ANSWERS
BEGIN;

-- Create prerequisite data: universities and majors
INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucla', 'UCLA', 'Los Angeles, CA')
ON CONFLICT (university_id) DO NOTHING;

INSERT INTO majors (major_id, name) VALUES
    ('cs', 'Computer Science'),
    ('ee', 'Electrical Engineering')
ON CONFLICT (major_id) DO NOTHING;

-- Create users (students and mentors)
INSERT INTO users (user_id, username, email, first_name, last_name, password, university_id, bio) VALUES
    (1, 'jsmith', 'john@example.com', 'John', 'Smith', 'password123', 'ucla', 'CS student'),
    (2, 'jdoe', 'jane@example.com', 'Jane', 'Doe', 'securepass', 'uci', 'EE student'),
    (3, 'mwilson', 'mike@example.com', 'Mike', 'Wilson', 'mentorpass', 'uci', 'Tech veteran')
ON CONFLICT (user_id) DO UPDATE 
SET first_name = EXCLUDED.first_name, last_name = EXCLUDED.last_name;

-- Create student and mentor profiles
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date) VALUES
    (1, 'cs', 'Junior', '2026-05-15'),
    (2, 'ee', 'Senior', '2025-05-15')
ON CONFLICT (student_id) DO NOTHING;

INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (3, 'Tech Giants Inc.', 'Senior Engineer', 8, ARRAY['Web Development', 'AI'], 5)
ON CONFLICT (mentor_id) DO NOTHING;

-- Create a question
INSERT INTO questions (question_id, asker_id, title, content) VALUES
    (1, 1, 'How to prepare for technical interviews?', 'I have an interview coming up. Any tips?')
ON CONFLICT (question_id) DO NOTHING;

-- Insert test answers
INSERT INTO answers (question_id, answerer_id, content, is_anonymous) VALUES
    (1, 2, 'Practice coding problems daily. I recommend LeetCode and HackerRank.', FALSE),
    (1, 3, 'From a mentor perspective: Focus on system design and be ready to explain your thought process clearly.', FALSE),
    (1, 1, 'Update: I found a great resource with practice questions. Will share how it goes.', TRUE);

-- Display question with answers
SELECT 'Question with Answers:' AS message;
SELECT 
    q.title AS question,
    q.content AS question_details,
    (SELECT first_name || ' ' || last_name FROM users WHERE user_id = q.asker_id) AS asked_by
FROM questions q
WHERE q.question_id = 1;

SELECT 
    a.answer_id,
    CASE 
        WHEN a.is_anonymous THEN 'Anonymous'
        ELSE u.first_name || ' ' || u.last_name 
    END AS answerer,
    CASE 
        WHEN m.mentor_id IS NOT NULL THEN 'Mentor'
        WHEN s.student_id IS NOT NULL THEN 'Student'
        ELSE 'User'
    END AS role,
    a.content,
    a.created_at
FROM answers a
JOIN users u ON a.answerer_id = u.user_id
LEFT JOIN students s ON u.user_id = s.student_id
LEFT JOIN mentors m ON u.user_id = m.mentor_id
WHERE a.question_id = 1 AND a.is_deleted = FALSE
ORDER BY a.created_at;

ROLLBACK;