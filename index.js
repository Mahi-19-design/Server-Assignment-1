const express = require("express");

const app = express();
// const app = cors();

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/topper", (req, res) => {

  const sorted = students.sort((a,b) => b.cgpa - a.cgpa);
const topper = sorted[0];
  res.status(200).json(topper);
});

app.get("/students/count", (req, res) => {

  res.status(200).json({count : students.length});
});

app.get("/students/average", (req, res) => {
let sum = 0;
  for(let i = 0 ; i< students.length ; i++){
  sum = students[i].cgpa + sum;
  }
  let avg =  sum / students.length ; 
    if (!avg) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({avg});
});

app.get("/students/:id", (req, res) => {
  const StudentsId = Number(req.params.id);
  const student = students.find(u => u.id === StudentsId);

  if (!student) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(student);
});

app.get("/students/branch/:branchName", (req, res) => {
  const branchName = req.params.branchName;
  const result = students.filter(student =>
    student.branch.toLowerCase() === branchName.toLowerCase()
  );
  res.status(200).json(result);
});                                                                                                                                                


app.listen(3000, () => {
  console.log("Server started on port 3000");
});