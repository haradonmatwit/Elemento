const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
const db = new sqlite3.Database(":memory:");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

db.serialize(() => {
    db.run(`CREATE TABLE form (
        name VARCHAR(255),
        email VARCHAR(255),
        subject VARCHAR(15),
        feedback VARCHAR(255),
        dateTaken DATE,
        timeTaken TIME
    )`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Feedback.html');
  });

app.post("/submit-feedback", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const feedback = req.body.feedback;
    console.log(`Received feedback from: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`${feedback}`);
    const dateTaken = new Date().toISOString().slice(0, 10);
    const timeTaken = new Date().toISOString().slice(11, 19);
    const stmt = db.prepare("INSERT INTO form (name, email, subject, feedback, dateTaken, timeTaken) VALUES (?, ?, ?, ?, ?, ?)");
    stmt.run(name, email, subject, feedback, dateTaken, timeTaken, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error inserting feedback into the database.");
        } else {
            res.status(200).send("Feedback submitted successfully.");
        }
    });
    stmt.finalize();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});