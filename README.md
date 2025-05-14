📁 express-request-bodyparser-basics
This project demonstrates basic request handling in Express using body-parser, covering:

Handling GET and POST requests

Using sendFile() to serve HTML pages

Parsing form data with body-parser


# express-request-bodyparser-basics

A beginner-friendly Node.js project using Express and body-parser to demonstrate how to handle `GET` and `POST` requests, and how to serve HTML files using `sendFile()`.

---

## 🚀 Features

- Handle HTTP `GET` and `POST` requests
- Use `body-parser` middleware to parse form data
- Serve static HTML using `res.sendFile()`
- Minimal setup – perfect for learning core concepts

---

## 🧰 Requirements

- Node.js (v14 or later)
- npm

---

## 📦 Setup Instructions

### 1. Create a project folder and initialize npm:
```bash
mkdir express-request-bodyparser-basics
cd express-request-bodyparser-basics
npm init -y

```
### Install required packages:
npm install express body-parser


📝 Example Code
```bash
// jshintversion:6
// EXPRESS 
const express = require('express');
// BODY-PERSER
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extend:true}));


// HANDLING REQUEST & RESPONSE [ GET Request ]
// sendFile function used [ not send function ]
app.get("/", function(Req, res){
    res.sendFile(__dirname+'/index.html');
});

//  HANDLING REQUEST & RESPONSE [ POST Request ]

app.post("/", function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);

    // console.log("w is "+w +" \n h is"+ h);
    var bmi = (w/(h*h));
    res.send("bmi= "+ bmi);
});



views/index.html (Simple Form)

<h1>BMI CALC</h1>
<form action="/" method="post">
  <label for="weight">weight:</label><br>
  <input type="text" id="weight" name="weight" value=""><br>
  <label for="height">height:</label><br>
  <input type="text" id="height" name="height" value=""><br><br>
  <input type="submit" value="Submit">
</form> 
```


✅ What You’ll Learn
Basic Express server setup

Handling form data via POST with body-parser

Serving HTML using sendFile()

Understanding req.body and route handling