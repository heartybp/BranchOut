BEGIN;

-- 1. Universities (10)
INSERT INTO universities (university_id, name, location) VALUES
    ('uci', 'University of California, Irvine', 'Irvine, CA'),
    ('ucla', 'University of California, Los Angeles', 'Los Angeles, CA'),
    ('ucb', 'University of California, Berkeley', 'Berkeley, CA'),
    ('stanford', 'Stanford University', 'Stanford, CA'),
    ('mit', 'Massachusetts Institute of Technology', 'Cambridge, MA'),
    ('harvard', 'Harvard University', 'Cambridge, MA'),
    ('caltech', 'California Institute of Technology', 'Pasadena, CA'),
    ('cmu', 'Carnegie Mellon University', 'Pittsburgh, PA'),
    ('gatech', 'Georgia Institute of Technology', 'Atlanta, GA'),
    ('nyu', 'New York University', 'New York, NY')
ON CONFLICT (university_id) DO NOTHING;

-- 2. Majors (10)
INSERT INTO majors (major_id, name) VALUES
    ('cs', 'Computer Science'),
    ('ee', 'Electrical Engineering'),
    ('me', 'Mechanical Engineering'),
    ('chem', 'Chemistry'),
    ('phys', 'Physics'),
    ('math', 'Mathematics'),
    ('business', 'Business Administration'),
    ('psych', 'Psychology'),
    ('bio', 'Biology'),
    ('econ', 'Economics')
ON CONFLICT (major_id) DO NOTHING;

-- 3. Users (20: 15 students + 5 mentors)
INSERT INTO users (user_id, username, email, first_name, last_name, password, university_id, bio) VALUES
    -- Students (15)
    (1, 'jsmith', 'jsmith@example.com', 'John', 'Smith', 'password123', 'ucla', 'CS student passionate about AI'),
    (2, 'jdoe', 'jdoe@example.com', 'Jane', 'Doe', 'password456', 'uci', 'EE student focusing on renewable energy'),
    (3, 'alee', 'alee@example.com', 'Alex', 'Lee', 'password789', 'ucb', 'Business student interested in startups'),
    (4, 'mchen', 'mchen@example.com', 'Michael', 'Chen', 'passwordabc', 'mit', 'Mechanical engineering student'),
    (5, 'sjones', 'sjones@example.com', 'Sarah', 'Jones', 'passworddef', 'uci', 'Psychology student researching cognitive development'),
    (6, 'rwilson', 'rwilson@example.com', 'Robert', 'Wilson', 'password123', 'stanford', 'Physics student working on quantum computing'),
    (7, 'lgarcia', 'lgarcia@example.com', 'Linda', 'Garcia', 'password456', 'ucla', 'Biology student interested in genetics'),
    (8, 'bjohnson', 'bjohnson@example.com', 'Brian', 'Johnson', 'password789', 'caltech', 'Math student focusing on cryptography'),
    (9, 'tkim', 'tkim@example.com', 'Tina', 'Kim', 'passwordabc', 'cmu', 'Computer science student specializing in machine learning'),
    (10, 'dwilliams', 'dwilliams@example.com', 'David', 'Williams', 'passworddef', 'gatech', 'Electrical engineering student focusing on robotics'),
    (11, 'slee', 'slee@example.com', 'Sophia', 'Lee', 'password123', 'ucb', 'Economics student interested in fintech'),
    (12, 'jpark', 'jpark@example.com', 'James', 'Park', 'password456', 'nyu', 'Business student focusing on entrepreneurship'),
    (13, 'anguyen', 'anguyen@example.com', 'Amy', 'Nguyen', 'password789', 'ucla', 'Chemistry student researching sustainable materials'),
    (14, 'mrodriguez', 'mrodriguez@example.com', 'Miguel', 'Rodriguez', 'passwordabc', 'uci', 'Mechanical engineering student interested in aerospace'),
    (15, 'kpatel', 'kpatel@example.com', 'Kiran', 'Patel', 'passworddef', 'stanford', 'Computer science student focusing on cybersecurity'),
    
    -- Mentors (5)
    (16, 'jbrown', 'jbrown@example.com', 'Jennifer', 'Brown', 'mentorpass1', 'uci', 'Software engineer with expertise in web development'),
    (17, 'rwang', 'rwang@example.com', 'Richard', 'Wang', 'mentorpass2', 'mit', 'Data scientist specializing in machine learning'),
    (18, 'sliu', 'sliu@example.com', 'Steven', 'Liu', 'mentorpass3', 'stanford', 'Product manager with background in computer science'),
    (19, 'mthomas', 'mthomas@example.com', 'Michelle', 'Thomas', 'mentorpass4', 'ucla', 'Biotech researcher and startup founder'),
    (20, 'aharris', 'aharris@example.com', 'Andrew', 'Harris', 'mentorpass5', 'ucb', 'UX designer with focus on accessibility')
ON CONFLICT (user_id) DO UPDATE 
SET first_name = EXCLUDED.first_name, 
    last_name = EXCLUDED.last_name;

-- Reset sequence to avoid conflicts
SELECT setval(pg_get_serial_sequence('users', 'user_id'), 20, true);

-- 4. Students (15)
INSERT INTO students (student_id, major_id, grade_level, expected_graduation_date, resume_url) VALUES
    (1, 'cs', 'Junior', '2025-06-15', 'https://resume.example.com/jsmith'),
    (2, 'ee', 'Senior', '2024-06-15', 'https://resume.example.com/jdoe'),
    (3, 'business', 'Sophomore', '2026-06-15', 'https://resume.example.com/alee'),
    (4, 'me', 'Senior', '2024-06-15', 'https://resume.example.com/mchen'),
    (5, 'psych', 'Junior', '2025-06-15', 'https://resume.example.com/sjones'),
    (6, 'phys', 'Graduate', '2027-06-15', 'https://resume.example.com/rwilson'),
    (7, 'bio', 'Senior', '2024-06-15', 'https://resume.example.com/lgarcia'),
    (8, 'math', 'Junior', '2025-06-15', 'https://resume.example.com/bjohnson'),
    (9, 'cs', 'Graduate', '2026-12-15', 'https://resume.example.com/tkim'),
    (10, 'ee', 'Senior', '2024-06-15', 'https://resume.example.com/dwilliams'),
    (11, 'econ', 'Junior', '2025-06-15', 'https://resume.example.com/slee'),
    (12, 'business', 'Senior', '2024-06-15', 'https://resume.example.com/jpark'),
    (13, 'chem', 'Graduate', '2026-06-15', 'https://resume.example.com/anguyen'),
    (14, 'me', 'Junior', '2025-06-15', 'https://resume.example.com/mrodriguez'),
    (15, 'cs', 'Senior', '2024-06-15', 'https://resume.example.com/kpatel')
ON CONFLICT (student_id) DO NOTHING;

-- 5. Mentors (5)
INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees) VALUES
    (16, 'Google', 'Senior Software Engineer', 8, ARRAY['Web Development', 'Cloud Computing', 'JavaScript'], 5),
    (17, 'Amazon', 'Data Scientist', 6, ARRAY['Machine Learning', 'Python', 'Data Analysis'], 4),
    (18, 'Apple', 'Product Manager', 10, ARRAY['Product Management', 'UX Design', 'Agile'], 6),
    (19, 'BioGen', 'Research Director', 12, ARRAY['Biotech', 'Research Methods', 'Grant Writing'], 3),
    (20, 'Design Co', 'UX Director', 9, ARRAY['UI/UX Design', 'Accessibility', 'User Research'], 5)
ON CONFLICT (mentor_id) DO NOTHING;

-- 6. Work Experiences (10)
INSERT INTO work_experiences (user_id, company, job_title, description, date_started, date_ended, is_current) VALUES
    (1, 'Google', 'Software Engineering Intern', 'Worked on the Google Maps team developing new features.', '2023-06-01', '2023-08-30', FALSE),
    (2, 'Tesla', 'Electrical Engineering Intern', 'Assisted in designing battery management systems.', '2023-05-15', '2023-08-15', FALSE),
    (9, 'Amazon', 'Machine Learning Intern', 'Developed recommendation algorithms for the retail platform.', '2023-06-01', '2023-08-30', FALSE),
    (10, 'Boston Dynamics', 'Robotics Intern', 'Assisted in developing control systems for quadruped robots.', '2023-05-15', '2023-08-15', FALSE),
    (15, 'Microsoft', 'Security Intern', 'Worked on identifying and patching security vulnerabilities.', '2023-06-01', NULL, TRUE),
    (16, 'Facebook', 'Software Engineer', 'Developed front-end components for the main app.', '2015-03-15', '2018-06-30', FALSE),
    (16, 'Google', 'Senior Software Engineer', 'Leading development of web applications using Angular and Node.js.', '2018-07-15', NULL, TRUE),
    (17, 'Netflix', 'Data Analyst', 'Analyzed user behavior to improve recommendation systems.', '2017-05-01', '2020-02-28', FALSE),
    (17, 'Amazon', 'Data Scientist', 'Building machine learning models for demand forecasting.', '2020-03-15', NULL, TRUE),
    (18, 'Apple', 'Product Manager', 'Managing the development of iOS applications.', '2013-08-01', NULL, TRUE);

-- Reset sequence
SELECT setval(pg_get_serial_sequence('work_experiences', 'experience_id'), 10, true);

-- 7. Connections (10)
INSERT INTO connections (requester_id, receiver_id, status) VALUES
    (1, 2, 'accepted'),  -- John and Jane
    (1, 3, 'accepted'),  -- John and Alex
    (2, 4, 'accepted'),  -- Jane and Michael
    (3, 5, 'pending'),   -- Alex and Sarah
    (6, 7, 'accepted'),  -- Robert and Linda
    (8, 9, 'accepted'),  -- Brian and Tina
    (10, 11, 'pending'), -- David and Sophia
    (12, 13, 'accepted'), -- James and Amy
    (14, 15, 'pending'),  -- Miguel and Kiran
    (1, 16, 'accepted')   -- John and Jennifer (mentor)
ON CONFLICT (requester_id, receiver_id) DO NOTHING;

-- Reset sequence
SELECT setval(pg_get_serial_sequence('connections', 'connection_id'), 10, true);

-- 8. Mentorship Requests (10)
INSERT INTO mentorship_requests (student_id, mentor_id, status, message) VALUES
    (1, 16, 'accepted', 'I would love to learn more about web development and how to prepare for a career at Google.'),
    (2, 16, 'pending', 'I''m interested in combining electrical engineering with web technologies.'),
    (3, 18, 'accepted', 'I want to learn about product management for my startup idea.'),
    (4, 17, 'pending', 'I''m interested in applying machine learning to mechanical systems.'),
    (5, 19, 'rejected', 'I''d like guidance on research methodologies for psychology studies.'),
    (9, 17, 'accepted', 'I want to deepen my knowledge of machine learning algorithms.'),
    (10, 16, 'pending', 'I''m interested in the intersection of electrical engineering and web development.'),
    (12, 18, 'accepted', 'I want to learn about transitioning from a business degree to product management.'),
    (13, 19, 'pending', 'I''d like guidance on research techniques in chemistry.'),
    (15, 16, 'accepted', 'I want to learn more about cybersecurity in web applications.')
ON CONFLICT DO NOTHING;

-- Reset sequence
SELECT setval(pg_get_serial_sequence('mentorship_requests', 'request_id'), 10, true);

-- 9. Mentorship Groups (10)
INSERT INTO mentorship_groups (group_id, mentor_id, name, description, max_mentees) VALUES
    (1, 16, 'Web Development Fundamentals', 'Learn the basics of HTML, CSS, and JavaScript.', 8),
    (2, 16, 'Advanced React', 'Deep dive into React, Redux, and modern JavaScript patterns.', 5),
    (3, 17, 'Machine Learning Basics', 'Introduction to ML algorithms and Python libraries.', 6),
    (4, 17, 'Advanced Data Science', 'Advanced topics in ML, deep learning, and data engineering.', 4),
    (5, 18, 'Product Management 101', 'Basics of product management for tech products.', 10),
    (6, 18, 'Agile Development', 'Learn about agile methodologies and project management.', 8),
    (7, 19, 'Research Methods', 'Scientific research methods and experiment design.', 5),
    (8, 19, 'Grant Writing Workshop', 'Learn how to write effective research grant proposals.', 4),
    (9, 20, 'UI/UX Fundamentals', 'Introduction to user interface and experience design.', 8),
    (10, 20, 'Accessible Design', 'Designing products that are accessible to all users.', 5)
ON CONFLICT (group_id) DO NOTHING;

-- Reset sequence
SELECT setval(pg_get_serial_sequence('mentorship_groups', 'group_id'), 10, true);

-- 10. Mentorship Group Members (10)
INSERT INTO mentorship_group_members (group_id, student_id, joined_at) VALUES
    (1, 1, '2023-09-15 10:00:00'),
    (1, 2, '2023-09-15 11:30:00'),
    (2, 1, '2023-09-16 14:00:00'),
    (3, 9, '2023-09-15 09:45:00'),
    (3, 4, '2023-09-17 16:20:00'),
    (5, 3, '2023-09-18 13:10:00'),
    (5, 12, '2023-09-19 11:05:00'),
    (7, 5, '2023-09-20 15:30:00'),
    (7, 13, '2023-09-21 10:15:00'),
    (9, 15, '2023-09-22 14:45:00')
ON CONFLICT DO NOTHING;

-- 11. Posts (10)
INSERT INTO posts (poster_id, content, media_url, created_at) VALUES
    (1, 'Just finished my first major project using React and Node.js!', 'https://github.com/jsmith/awesome-project', '2023-10-01 09:30:00'),
    (2, 'Looking for study partners for the upcoming EE finals.', NULL, '2023-10-02 14:15:00'),
    (3, 'Attended an amazing startup workshop yesterday. Here are my key takeaways...', 'https://medium.com/startup-tips', '2023-10-03 11:45:00'),
    (9, 'Check out this cool machine learning algorithm I implemented!', 'https://github.com/tkim/ml-project', '2023-10-04 16:20:00'),
    (15, 'Just passed my cybersecurity certification!', 'https://cert.example.com/kpatel', '2023-10-05 10:10:00'),
    (16, 'Hosting a web development workshop next Friday. All mentees welcome!', 'https://meetup.com/webdev-workshop', '2023-10-06 13:30:00'),
    (17, 'New article: "Introduction to Data Science with Python"', 'https://medium.com/data-science-intro', '2023-10-07 09:45:00'),
    (18, 'Product management tip of the day: Always validate your assumptions with user research.', NULL, '2023-10-08 11:00:00'),
    (19, 'Just published a new research paper on genetic markers.', 'https://journal.example.com/genetics', '2023-10-09 14:50:00'),
    (20, 'The importance of accessibility in modern web design.', 'https://medium.com/accessible-design', '2023-10-10 10:25:00');

-- Reset sequence
SELECT setval(pg_get_serial_sequence('posts', 'post_id'), 10, true);

-- 12. Questions (10)
INSERT INTO questions (asker_id, title, content, is_anonymous, created_at) VALUES
    (1, 'How to optimize React performance?', 'I''m building a complex React application and it''s starting to slow down. What are some good techniques for optimizing performance?', FALSE, '2023-10-11 09:30:00'),
    (2, 'Best resources for learning circuit design?', 'I need to improve my circuit design skills for a project. Any recommended books or online courses?', FALSE, '2023-10-12 14:15:00'),
    (3, 'How to validate a startup idea?', 'I have a business idea but I''m not sure if it''s viable. What steps should I take to validate it before investing too much time?', TRUE, '2023-10-13 11:45:00'),
    (4, 'Career paths in mechanical engineering?', 'What are some specialized career paths in mechanical engineering that are growing in demand?', FALSE, '2023-10-14 16:20:00'),
    (5, 'Research methods for psychology studies?', 'What are some effective research methods for studying cognitive development in children?', FALSE, '2023-10-15 10:10:00'),
    (9, 'Advanced machine learning algorithms?', 'I''ve mastered the basics of ML. What advanced algorithms should I learn next for computer vision applications?', FALSE, '2023-10-16 13:30:00'),
    (10, 'Tips for robotics projects?', 'I''m starting a robotics project for my senior year. Any tips or common pitfalls to avoid?', TRUE, '2023-10-17 09:45:00'),
    (12, 'How to transition into entrepreneurship?', 'I''m a business student who wants to start my own company after graduation. What should I focus on now?', FALSE, '2023-10-18 11:00:00'),
    (13, 'Sustainable materials research?', 'What are the most promising areas of research in sustainable materials for consumer products?', FALSE, '2023-10-19 14:50:00'),
    (15, 'Best cybersecurity certifications?', 'Which cybersecurity certifications are most valued by employers right now?', TRUE, '2023-10-20 10:25:00');

-- Reset sequence
SELECT setval(pg_get_serial_sequence('questions', 'question_id'), 10, true);

-- 13. Answers (10)
INSERT INTO answers (question_id, answerer_id, content, is_anonymous, created_at) VALUES
    (1, 16, 'For React performance optimization, try: 1) Use React.memo for component memoization, 2) Implement virtualization for long lists with react-window, 3) Lazy load components, 4) Use the React profiler to identify bottlenecks.', FALSE, '2023-10-11 10:45:00'),
    (1, 9, 'I had a similar issue and found that optimizing state management helped a lot. Consider using useCallback and useMemo hooks for expensive calculations.', FALSE, '2023-10-11 13:20:00'),
    (2, 10, 'I recommend "Practical Electronics for Inventors" by Paul Scherz. Also, the MIT OpenCourseWare has excellent materials on circuit design.', FALSE, '2023-10-12 15:30:00'),
    (3, 18, 'To validate a startup idea: 1) Conduct customer interviews, 2) Build a minimum viable product, 3) Run small-scale tests, 4) Analyze the competitive landscape, 5) Create financial projections.', FALSE, '2023-10-13 14:00:00'),
    (5, 19, 'For studying cognitive development in children, consider mixed-methods approaches combining observational studies with controlled experiments. Longitudinal studies are particularly valuable.', FALSE, '2023-10-15 11:45:00'),
    (6, 17, 'After mastering the basics, I''d recommend studying: 1) Advanced CNN architectures like ResNet and Transformers, 2) GANs for generative tasks, 3) Reinforcement learning algorithms, 4) Transfer learning techniques.', FALSE, '2023-10-16 15:10:00'),
    (8, 18, 'Focus on developing a network in your industry of interest, learn basic accounting and finance, and try to get experience working at a startup to understand the environment.', FALSE, '2023-10-18 13:25:00'),
    (9, 19, 'Biodegradable polymers and bio-based materials are currently hot research areas. Also look into recycling technologies for existing materials.', FALSE, '2023-10-19 16:15:00'),
    (10, 16, 'The CISSP is highly valued for security management roles, while for hands-on technical roles, OSCP or CEH certificates are well respected.', FALSE, '2023-10-20 11:40:00'),
    (10, 15, 'Based on my research and discussions with professionals, the Security+ is a good starting point, then OSCP for practical skills.', TRUE, '2023-10-20 14:05:00');

-- Reset sequence
SELECT setval(pg_get_serial_sequence('answers', 'answer_id'), 10, true);

-- 14. Group Messages (10)
INSERT INTO group_messages (group_id, sender_id, content, created_at) VALUES
    (1, 16, 'Welcome everyone to the Web Development Fundamentals group! Let''s start by introducing ourselves.', '2023-09-15 10:30:00'),
    (1, 1, 'Hi everyone! I''m John, a CS student interested in becoming a full-stack developer.', '2023-09-15 10:35:00'),
    (1, 2, 'Hello! I''m Jane from EE background but very interested in web technologies.', '2023-09-15 10:40:00'),
    (2, 16, 'Welcome to Advanced React! This group will focus on modern React practices and state management.', '2023-09-16 14:30:00'),
    (2, 1, 'Looking forward to learning advanced React concepts, especially hooks and context API.', '2023-09-16 14:35:00'),
    (3, 17, 'Welcome to Machine Learning Basics! We''ll start with fundamental algorithms next week.', '2023-09-15 10:00:00'),
    (3, 9, 'Excited to be here! I''ve been working through some Python tutorials to prepare.', '2023-09-15 10:15:00'),
    (3, 4, 'Hello everyone! I''m Michael, looking to apply ML to mechanical engineering problems.', '2023-09-17 16:30:00'),
    (5, 18, 'Welcome to Product Management 101! In this group, we''ll cover the basics of product development and management.', '2023-09-18 13:30:00'),
    (5, 3, 'Thanks for having me! I''m developing a startup idea and need to learn proper product management.', '2023-09-18 13:45:00');

-- Reset sequence
SELECT setval(pg_get_serial_sequence('group_messages', 'message_id'), 10, true);

-- Commit the transaction
COMMIT;

-- Verification Query: Count records in each table
SELECT 'universities' AS table_name, COUNT(*) AS record_count FROM universities UNION ALL
SELECT 'majors', COUNT(*) FROM majors UNION ALL
SELECT 'users', COUNT(*) FROM users UNION ALL
SELECT 'students', COUNT(*) FROM students UNION ALL
SELECT 'mentors', COUNT(*) FROM mentors UNION ALL
SELECT 'work_experiences', COUNT(*) FROM work_experiences UNION ALL
SELECT 'connections', COUNT(*) FROM connections UNION ALL
SELECT 'mentorship_requests', COUNT(*) FROM mentorship_requests UNION ALL
SELECT 'mentorship_groups', COUNT(*) FROM mentorship_groups UNION ALL
SELECT 'mentorship_group_members', COUNT(*) FROM mentorship_group_members UNION ALL
SELECT 'posts', COUNT(*) FROM posts UNION ALL
SELECT 'questions', COUNT(*) FROM questions UNION ALL
SELECT 'answers', COUNT(*) FROM answers UNION ALL
SELECT 'group_messages', COUNT(*) FROM group_messages
ORDER BY table_name;