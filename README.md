

# 🎓 **Student CGPA API**

### 📘 *Using In-Memory JSON Database*

---

## 🚀 **Project Objective**

This project is a **REST API built using Express.js** to manage student academic performance records stored in an in-memory JSON array.

✔ Uses only **GET routes**
✔ Includes **Static & Dynamic routes**
✔ Follows **REST principles**
✔ Returns proper **HTTP status codes**
✔ No external database used

---

## 🛠 **Tech Stack**

* **Node.js**
* **Express.js**
* **CORS**
* **JavaScript**

---

# 📂 **Project Structure**

```
student-cgpa-api/
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
├── server.js
└── README.md
```

---

# ⚙️ **How To Run Locally**

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/student-cgpa-api.git
cd student-cgpa-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Server

```bash
npm start
```

📍 Server runs on:

```
http://localhost:3000
```

---

# 📊 **Student Data Structure**

Each student record:

```js
{
  id: 1,
  name: "Aarav Sharma",
  branch: "CSE",
  semester: 8,
  cgpa: 9.3
}
```

✔ Minimum **10 student records** stored in an in-memory array.

---

# 📌 **Implemented API Routes**

---

## 🔹 1️⃣ **GET /students**

📌 Returns **all students**

* Status Code: **200**
* Returns full JSON array

---

## 🔹 2️⃣ **GET /students/topper**

📌 Returns student with **highest CGPA**

* Status Code: **200**
* Returns single student object
* If no students exist → **404**

💡 Logic Used:

* `reduce()` for max CGPA calculation

---

## 🔹 3️⃣ **GET /students/average**

📌 Returns **average CGPA**

### Response:

```json
{
  "averageCGPA": 8.51
}
```

💡 Logic Used:

* Aggregation using `reduce()`

---

## 🔹 4️⃣ **GET /students/count**

📌 Returns **total number of students**

```json
{
  "totalStudents": 10
}
```

---

# 🔥 **Dynamic Routes**

---

## 🔹 5️⃣ **GET /students/:id**

📌 Returns student by **ID**

Example:

```
GET /students/3
```

### Behavior:

✔ If student exists → **200**
❌ If not found → **404**

---

## 🔹 6️⃣ **GET /students/branch/:branchName**

📌 Returns students from a specific branch

Example:

```
GET /students/branch/CSE
```

### Behavior:

✔ Case-insensitive filtering
✔ Returns array of students
✔ If none found → returns empty array `[]`

📝 Justification:
The route is valid and request is correct. No matching data is not an error, so we return **200 with empty array**.

---

# ❗ **HTTP Status Codes Used**

| Status Code | Meaning               |
| ----------- | --------------------- |
| **200**     | Success               |
| **404**     | Resource not found    |
| **500**     | Internal server error |

---

# 🌍 **Deployment Links**

### 🔗 GitHub Repository

```
https://github.com/Mahi-19-design/Server-Assignment-1
```

### 🔗 Postman Documentation

```
https://documenter.getpostman.com/view/xxxxxx
```

### 🔗 Render Deployment

```
https://server-assignment-1-vcas.onrender.com/
```

---

# 🎯 **Learning Outcomes**

After completing this assignment, I learned:

* ✔ Designing RESTful APIs
* ✔ Handling dynamic route parameters
* ✔ Filtering & aggregation logic
* ✔ Returning structured JSON responses
* ✔ Deploying backend APIs on Render
* ✔ Documenting APIs professionally

---

# 👩‍💻 **Author**

**Mahi Patel**

