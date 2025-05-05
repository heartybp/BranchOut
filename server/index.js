const express = require("express");
const app = express(); // variable app runs express
const cors = require("cors");
const pool = require("./db"); // add to connect to database

// middleware
app.use(cors());
app.use(express.json()); // <-- allows us to access request.body
// when building fullstack application, need data from client side
// only way to get data from client side is from request body object

// ROUTES

// student routes

/////////////////////////////////////////////
/////////////////////////////////////////////
////////////// STUDENT ROUTES ///////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
// 1 - create a user
app.post("/users", async (req, res) => {
  try {
    const {
      username,
      email,
      first_name,
      last_name,
      password,
      university_id,
      bio,
    } = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (username, email, first_name, last_name, password, university_id, bio) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [username, email, first_name, last_name, password, university_id, bio]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 2 - get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 3 - get a single user using id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 4 - update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      email,
      first_name,
      last_name,
      password,
      university_id,
      bio,
    } = req.body;

    const updateUser = await pool.query(
      "UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4, password = $5, university_id = $6, bio = $7 WHERE user_id = $8 RETURNING *",
      [username, email, first_name, last_name, password, university_id, bio, id]
    );

    if (updateUser.rows.length === 0) {
      // error checking: trying to update a user that doesn't exist
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updateUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 5 - delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [id]
    );

    if (deleteUser.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 1 - create a student
app.post("/students", async (req, res) => {
  try {
    const {
      username,
      email,
      first_name,
      last_name,
      password,
      university_id,
      major_id,
      grade_level,
      expected_graduation_date,
      resume_url,
      bio,
    } = req.body;
    const newStudent = await pool.query(
      "INSERT INTO students (username, email, first_name, last_name, password, university_id, major_id, grade_level, expected_graduation_date, resume_url, bio) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [
        username,
        email,
        first_name,
        last_name,
        password,
        university_id,
        major_id,
        grade_level,
        expected_graduation_date,
        resume_url,
        bio,
      ]
    );

    res.json(newStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 2 - get all students
app.get("/students", async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM students");
    res.json(allStudents.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 3 - get a single student using id
app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await pool.query(
      "SELECT * FROM students WHERE student_id = $1",
      [id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 4 - update a student
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      email,
      first_name,
      last_name,
      password,
      university_id,
      major_id,
      grade_level,
      expected_graduation_date,
      resume_url,
      bio,
    } = req.body;
    const updateStudent = await pool.query(
      "UPDATE students SET username = $1, email = $2, first_name = $3, last_name = $4, password = $5, university_id = $6, major_id = $7, grade_level = $8, expected_graduation_date = $9, resume_url = $10, bio = $11 WHERE student_id = $12 RETURNING *",
      [
        username,
        email,
        first_name,
        last_name,
        password,
        university_id,
        major_id,
        grade_level,
        expected_graduation_date,
        resume_url,
        bio,
        id,
      ]
    );

    if (updateStudent.rows.length === 0) {
      // error checking: trying to update a student that doesn't exist
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updateStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 5 - delete a student
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await pool.query(
      "DELETE FROM students WHERE student_id = $1 RETURNING *",
      [id]
    );

    if (deleteStudent.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 6 - get student's connections
app.get("/students/:id/connections", async (req, res) => {
  try {
    const { id } = req.params;
    const connections = await pool.query(
      "SELECT * FROM connections WHERE requester_id = $1 OR receiver_id = $1",
      [id]
    );

    res.json(connections.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 7 - get student's mentorship requests
app.get("/students/:id/mentorship-requests", async (req, res) => {
  try {
    const { id } = req.params;
    const mentorshipRequests = await pool.query(
      "SELECT * FROM mentorship_requests WHERE student_id = $1",
      [id]
    );

    res.json(mentorshipRequests.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 8 - get student's posts
app.get("/students/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await pool.query(
      "SELECT * FROM posts WHERE poster_id = $1 AND poster_type = 'student'",
      [id]
    );

    res.json(posts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 10 - get student's work experience
app.get("/students/:id/work-experiences", async (req, res) => {
  try {
    const { id } = req.params;

    const workExperiences = await pool.query(
      `SELECT we.*
       FROM work_experiences we
       JOIN students s ON we.user_id = s.student_id
       WHERE s.student_id = $1`,
      [id]
    );

    res.json(workExperiences.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!READ THIS BEFORE IMPLEMENTING ROUTES!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* 
use this structure for routes, making sure to use
the correct http request (POST, GET, PUT, DELETE)

the main thing is writing the correct SQL query in pool.query()

refer to the database!

the code looks long but it's actually not that bad! i swear!!!

express requests:
    - req.body is used for POST/PUT
    - req.param is used to access route parameters 
    - https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc

app.get("/PATH/", async (req, res) => {
    try {
        
        // retrieve parameters using req.param or send data using req.body or both

        const object = await pool.query(
            "INSERT QUERY HERE $1", [variable for placeholder $1]
        );

        res.json(); // send json responses back to client --> send results of query back to front end
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});
*/

/////////////////////////////////////////////
/////////////////////////////////////////////
////////////// MENTOR ROUTES ////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// mentor routes

// Creating a mentor
app.post("/mentors", async (req, res) => {
  try {
    const {
      mentor_id,
      company,
      job_title,
      years_of_experience,
      expertise_areas,
      max_mentees,
      bio,
    } = req.body;
    const newMentor = await pool.query(
      "INSERT INTO mentors (mentor_id, company, job_title, years_of_experience, expertise_areas, max_mentees, bio)VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        mentor_id,
        company,
        job_title,
        years_of_experience,
        expertise_areas,
        max_mentees,
        bio,
      ]
    );

    // Example input post req
    // {
    //   mentor_id: 16;
    //   company: "Google";
    //   job_title: "Senior Cloud Engineer";
    //   years_of_experience: 10;
    //   expertise_areas: ['Cloud', 'FullStack'];
    //   max_mentees: 2;
    //   bio: "wait im goated";
    // }

    res.json(newMentor.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Getting all mentors
app.get("/mentors", async (req, res) => {
  try {
    const allMentors = await pool.query("SELECT * FROM mentors");
    res.json(allMentors.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a single mentor by id
app.get("/mentors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await pool.query(
      "SELECT * FROM mentors WHERE mentor_id = $1",
      [id]
    );

    if (mentor.rows.length === 0) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.json(mentor.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// update a mentor's information by their id
app.put("/mentors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      email,
      first_name,
      last_name,
      company,
      job_title,
      years_of_experience,
      university_id,
      expertise_areas,
      max_mentees,
      bio,
    } = req.body;
    const updateMentor = await pool.query(
      "UPDATE mentors SET username = $1, email = $2, first_name = $3, last_name = $4, company = $5, job_title = $6, years_of_experience = $7, university_id = $8, expertise_areas = $9, max_mentees = $10, bio = $11 WHERE mentor_id = $12 RETURNING *",
      [
        username,
        email,
        first_name,
        last_name,
        company,
        job_title,
        years_of_experience,
        university_id,
        expertise_areas,
        max_mentees,
        bio,
        id,
      ]
    );

    if (updateMentor.rows.length === 0) {
      // error checking: trying to update a student that doesn't exist
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.json(updateMentor.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 5 - delete a mentor
app.delete("/mentors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMentor = await pool.query(
      "DELETE FROM mentors WHERE mentor_id = $1 RETURNING *",
      [id]
    );

    if (deleteMentor.rows.length === 0) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.json({ message: "Mentor was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting mentor's connections
app.get("/mentors/:id/connections", async (req, res) => {
  try {
    const { id } = req.params;
    const connections = await pool.query(
      "SELECT * FROM connections WHERE requester_id = $1 OR receiver_id = $1",
      [id]
    );

    res.json(connections.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting a mentor's mentorship request (received from a student?)
app.get("/mentors/:id/mentorship-requests", async (req, res) => {
  try {
    const { id } = req.params;
    const mentorshipRequests = await pool.query(
      "SELECT * FROM mentorship_requests WHERE mentor_id = $1",
      [id]
    );

    res.json(mentorshipRequests.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting a mentor's post
app.get("/mentors/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await pool.query(
      "SELECT * FROM posts WHERE poster_id = $1 AND poster_type = 'mentor'",
      [id]
    );

    res.json(posts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting a mentor's questions
app.get("/mentors/:id/questions", async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await pool.query(
      "SELECT * FROM questions WHERE asker_id = $1",
      [id]
    );

    res.json(questions.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting a mentor's work experience
app.get("/mentors/:id/work-experiences", async (req, res) => {
  try {
    const { id } = req.params;

    const workExperiences = await pool.query(
      `SELECT we.*
       FROM work_experiences we
       JOIN mentors m ON we.user_id = m.mentor_id
       WHERE m.mentor_id = $1`,
      [id]
    );

    res.json(workExperiences.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting mentors mentorship-groups
app.get("/mentors/:id/mentorship-groups", async (req, res) => {
  try {
    const { id } = req.params;
    const workExperiences = await pool.query(
      "SELECT * FROM mentorship_groups WHERE mentor_id = $1",
      [id]
    );

    res.json(workExperiences.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// work experience routes

/////////////////////////////////////////////
/////////////////////////////////////////////
//////// WORK EXPERIENCE ROUTES /////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//Create new experience
app.post("/work-experiences", async (req, res) => {
  try {
    const {
      user_id,
      company,
      job_title,
      description,
      date_started,
      date_ended,
      is_current,
    } = req.body;
    const newExperience = await pool.query(
      "INSERT INTO work_experiences (user_id, company, job_title, description, date_started, date_ended, is_current) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        user_id,
        company,
        job_title,
        description,
        date_started,
        date_ended,
        is_current,
      ]
    );

    res.json(newExperience.rows[0]); // Return the newly created work experience
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Get all work experiences for a user
app.get("/work-experiences/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const workExperiences = await pool.query(
      "SELECT * FROM work_experiences WHERE user_id = $1",
      [userId]
    );

    if (workExperiences.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No work experiences found for this user." });
    }

    res.json(workExperiences.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Update a work experience
app.put("/work-experiences/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //Don't need holder id because no point in changing if student/mentor data for a work experience
    const {
      company,
      job_title,
      description,
      date_started,
      date_ended,
      is_current,
    } = req.body;
    const updatedExperience = await pool.query(
      "UPDATE work_experiences SET company = $1, job_title = $2, description = $3, date_started = $4, date_ended = $5, is_current = $6 WHERE experience_id = $7 RETURNING *",
      [
        company,
        job_title,
        description,
        date_started,
        date_ended,
        is_current,
        id,
      ]
    );

    if (updatedExperience.rows.length === 0) {
      return res.status(404).json({ message: "Work experience not found" });
    }

    res.json(updatedExperience.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Delete a work experience
app.delete("/work-experiences/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExperience = await pool.query(
      "DELETE FROM work_experiences WHERE experience_id = $1 RETURNING *",
      [id]
    );

    if (deletedExperience.rows.length === 0) {
      return res.status(404).json({ message: "Work experience not found" });
    }

    res.json({ message: "Work experience deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// connection routes

/////////////////////////////////////////////
/////////////////////////////////////////////
//////////// CONNECTION ROUTES //////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// creating a connection request
app.post("/connections", async (req, res) => {
  try {
    const { requester_id, receiver_id, status = "pending" } = req.body;
    const newConnection = await pool.query(
      "INSERT INTO connections (requester_id, receiver_id, status) VALUES($1, $2, $3) RETURNING *",
      [requester_id, receiver_id, status]
    );

    res.json(newConnection.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting all connections for a user
app.get("/connections/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const connections = await pool.query(
      "SELECT * FROM connections WHERE requester_id = $1 OR receiver_id = $1",
      [userId]
    );

    res.json(connections.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// (might have to recheck this)
// updating a connection (accept/reject)
app.put("/connections/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // updating the connection status specifically

    // We check first if accepted or rejected is NOT the updated status query
    // If it is, then we return an Error 400 message
    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    // Updates the status based on the connection id given.
    const updateConnection = await pool.query(
      "UPDATE connections SET status = $1 WHERE connection_id = $2 RETURNING *",
      [status, id]
    );

    if (updateConnection.rows.length === 0) {
      return res.status(404).json({ message: "Connection not found" });
    }

    res.json(updateConnection.rows[0]);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// deleting a connection
app.delete("/connections/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteConnection = await pool.query(
      "DELETE FROM connections WHERE connection_id = $1 RETURNING *",
      [id]
    );

    if (deleteConnection.rows.length === 0) {
      return res.status(404).json({ message: "Connection not found" });
    }

    res.json({ message: "Connection was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// mentorship request routes

/////////////////////////////////////////////
/////////////////////////////////////////////
///////// Mentorship Request ////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//Create a mentorship request
app.post("/mentorship-requests", async (req, res) => {
  try {
    const { student_id, mentor_id, message } = req.body;

    const newRequest = await pool.query(
      "INSERT INTO mentorship_requests (student_id, mentor_id, message) VALUES ($1, $2, $3) RETURNING *",
      [student_id, mentor_id, message]
    );

    res.json(newRequest.rows[0]); // Return the created mentorship request
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Getting all mentorship requests
app.get("/students/:id/mentorship-requests", async (req, res) => {
  try {
    const { id } = req.params;

    const studentRequests = await pool.query(
      "SELECT * FROM mentorship_requests WHERE student_id = $1",
      [id]
    );

    if (studentRequests.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No mentorship requests found for this student." });
    }

    res.json(studentRequests.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Getting all mentorship requests for a mentor
app.get("/mentors/:id/mentorship-requests", async (req, res) => {
  try {
    const { id } = req.params;

    const mentorRequests = await pool.query(
      "SELECT * FROM mentorship_requests WHERE mentor_id = $1",
      [id]
    );

    if (mentorRequests.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No mentorship requests found for this mentor." });
    }

    res.json(mentorRequests.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Update a mentorship request
app.put("/mentorship-requests/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedRequest = await pool.query(
      "UPDATE mentorship_requests SET status = $1 WHERE request_id = $2 RETURNING *",
      [status, id]
    );

    if (updatedRequest.rows.length === 0) {
      return res.status(404).json({ message: "Mentorship request not found." });
    }

    res.json(updatedRequest.rows[0]); // Update the mentorship request
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Delete a mentorship request
app.delete("/mentorship-requests/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await pool.query(
      "DELETE FROM mentorship_requests WHERE request_id = $1 RETURNING *",
      [id]
    );

    if (deletedRequest.rows.length === 0) {
      return res.status(404).json({ message: "Mentorship request not found." });
    }

    res.json({ message: "Mentorship request deleted successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Delete a mentorship request
app.delete("/mentorship-requests/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await pool.query(
      "DELETE FROM mentorship_requests WHERE request_id = $1 RETURNING *",
      [id]
    );

    if (deletedRequest.rows.length === 0) {
      return res.status(404).json({ message: "Mentorship request not found." });
    }

    res.json({ message: "Mentorship request deleted successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// question & answer routes

/////////////////////////////////////////////
/////////////////////////////////////////////
//////////////// Q&A ROUTES /////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Questions
// creating a question
app.post("/questions", async (req, res) => {
  try {
    const {
      asker_id,
      title,
      content,
      is_anonymous,
      created_at,
      updated_at,
      is_deleted,
    } = req.body;

    const newQuestion = await pool.query(
      "INSERT INTO questions (asker_id, title, content, is_anonymous, created_at, updated_at, is_deleted) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        asker_id,
        title,
        content,
        is_anonymous,
        created_at,
        updated_at,
        is_deleted,
      ]
    );

    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting all questions
app.get("/questions", async (req, res) => {
  try {
    const allQuestions = await pool.query(
      "SELECT * FROM questions WHERE is_deleted = false"
    );
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// update a question
app.put("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      asker_id,
      title,
      content,
      is_anonymous,
      created_at,
      updated_at,
      is_deleted,
    } = req.body;

    const updateQuestion = await pool.query(
      "UPDATE questions SET asker_id = $1, title = $2, content = $3, is_anonymous = $4, created_at = $5, updated_at = $6, is_deleted = $7 WHERE question_id = $8 RETURNING *",
      [
        asker_id,
        title,
        content,
        is_anonymous,
        created_at,
        updated_at,
        is_deleted,
        id,
      ]
    );

    if (updateQuestion.rows.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(updateQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// deleting a question
app.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query(
      "DELETE FROM questions WHERE asker_id = $1 RETURNING *",
      [id]
    );

    if (deleteQuestion.rows.length === 0) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Answers
app.post("/answers", async (req, res) => {
  try {
    const {
      question_id,
      answerer_id,
      content,
      is_anonymous,
      created_at,
      updated_at,
      is_deleted,
    } = req.body;
    const newAnswer = await pool.query(
      "INSERT INTO answers (question_id, answerer_id, content, is_anonymous, created_at, updated_at, is_deleted) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        question_id,
        answerer_id,
        content,
        is_anonymous,
        created_at,
        updated_at,
        is_deleted,
      ]
    );

    res.json(newAnswer.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// getting all answers for a question
app.get("/answers/:questionID", async (req, res) => {
  try {
    const { questionID } = req.params;
    // takes any answer with the correspond question id
    const answers = await pool.query(
      "SELECT * FROM answers WHERE question_id = $1 AND is_deleted = false",
      [questionID]
    );

    if (answers.rows.length === 0) {
      return res.status(404).json({ message: "Answer(s) not found" });
    }

    res.json(answers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// updating an answer (updating by answer ID)
app.put("/answers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      question_id,
      answerer_id,
      content,
      is_anonymous,
      created_at,
      updated_at,
      is_deleted,
    } = req.body;
    const updateAnswer = await pool.query(
      "UPDATE answers SET question_id = $1, answerer_type = $2, answerer_id = $3, content = $4, is_anonymous = $5, created_at = $6, updated_at = $7, is_deleted = $8 WHERE answer_id = $9 RETURNING *",
      [
        question_id,
        answerer_type,
        answerer_id,
        content,
        is_anonymous,
        created_at,
        updated_at,
        is_deleted,
        id,
      ]
    );

    if (updateAnswer.rows.length === 0) {
      // error checking: trying to update an answer that doesn't exist!
      return res.status(404).json({ message: "Answer not found" });
    }

    res.json(updateAnswer.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// deleting an answer
app.delete("/answers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAnswer = await pool.query(
      "DELETE FROM answers WHERE answer_id = $1 RETURNING *",
      [id]
    );

    if (deleteAnswer.rows.length === 0) {
      return res.status(404).json({ message: "Answer not found" });
    }
    res.json({ message: "Answer was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// search & filter routes
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////// SEARCH & FILTER /////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//Student search
app.get("/search/students?query=", async (req, res) => {
  try {
    const { query } = req.query; // gets search query

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required." });
    }

    const students = await pool.query(
      `SELECT * FROM students 
       WHERE LOWER(username) LIKE LOWER($1) 
       OR LOWER(email) LIKE LOWER($1) 
       OR LOWER(first_name) LIKE LOWER($1) 
       OR LOWER(last_name) LIKE LOWER($1)`
    );

    if (students.rows.length === 0) {
      return res.status(404).json({ message: "No students found." });
    }

    res.json(students.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Mentor search
app.get("/search/mentors", async (req, res) => {
  try {
    const { query } = req.query; // Extracts the search query

    if (!query) {
      return res.status(400).json({ message: "Query parameter is required." });
    }

    const mentors = await pool.query(
      `SELECT * FROM mentors 
       WHERE LOWER(username) LIKE LOWER($1) 
       OR LOWER(email) LIKE LOWER($1) 
       OR LOWER(first_name) LIKE LOWER($1) 
       OR LOWER(last_name) LIKE LOWER($1) 
       OR LOWER(job_title) LIKE LOWER($1) 
       OR EXISTS (SELECT 1 FROM unnest(expertise_areas) e WHERE LOWER(e) LIKE LOWER($1))`
    );

    if (mentors.rows.length === 0) {
      return res.status(404).json({ message: "No mentors found." });
    }

    res.json(mentors.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(5003, () => {
  console.log("server has started on port 5003");
});
