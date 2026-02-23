🎓 Student CGPA API
(Using In-Memory JSON Database)
📌 Objective

Build a REST API using Express.js that manages student academic performance records stored in an in-memory JSON array.

This project:

Uses only GET routes

Includes static and dynamic routes

Follows REST principles

Returns proper HTTP status codes

Does NOT use any database

🛠 Tech Stack

Node.js

Express.js

CORS

JavaScript


🚀 How To Run Locally
1️⃣ Clone Repository
git clone https://github.com/your-username/student-cgpa-api.git
cd student-cgpa-api
2️⃣ Install Dependencies
npm install
3️⃣ Start Server
npm start

Server runs on:

http://localhost:3000
📊 Student Data Structure

Each student record:

{
  id: 1,
  name: "Aarav Sharma",
  branch: "CSE",
  semester: 8,
  cgpa: 9.3
}

Minimum 10 records stored in an in-memory array.

📌 Implemented Routes
✅ 1. GET /students

Returns all students.

Status Code: 200

Returns full JSON array

Example:

GET /students
✅ 2. GET /students/topper

Returns the student with highest CGPA.

Status Code: 200

Returns single student object

If no students exist → 404

Core Logic Used:

reduce() to find maximum CGPA

Example:

GET /students/topper
✅ 3. GET /students/average

Returns average CGPA of all students.

Response Format:

{
  "averageCGPA": 8.51
}

Core Logic Used:

Aggregation using reduce()

Data transformation

Example:

GET /students/average
✅ 4. GET /students/count

Returns total number of students.

Response:

{
  "totalStudents": 10
}

Core Logic Used:

Array length property

Example:

GET /students/count
🔥 Dynamic Routes
✅ 5. GET /students/:id

Returns student by ID.

Example:

GET /students/3
Expected Behavior

If student exists → 200

If not found → 404

Core Concepts:

Route parameters

req.params

Proper error handling

✅ 6. GET /students/branch/:branchName

Returns students of a specific branch.

Example:

GET /students/branch/CSE
Expected Behavior

Returns array of matching students

Case-insensitive filtering

If no students found → returns empty array []

Justification:
The route exists and request is valid.
No matching data is not an error, so we return 200 with empty array.

Core Concepts:

Filtering

Case handling using .toLowerCase()

Clean REST route design

❗ HTTP Status Codes Used
Status Code	Meaning
200	Successful request
404	Resource not found
500	Server error
🌐 Deployment
🔗 GitHub Repository
https://github.com/your-username/student-cgpa-api
🔗 Postman Documentation
https://documenter.getpostman.com/view/xxxxxx
🔗 Render Deployment
https://student-cgpa-api.onrender.com
📘 Learning Outcomes

After completing this assignment:

Designed RESTful GET routes

Used dynamic route parameters

Implemented filtering and aggregation

Returned structured JSON responses

Deployed backend API on Render

Documented APIs using Postman

👩‍💻 Author

Mahi Patel
