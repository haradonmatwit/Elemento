const express = require("express");
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
const app = express();
const db = new sqlite3.Database(":memory:");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
db.serialize(() => {
    db.run(`CREATE TABLE form (
email VARCHAR(255),
subject VARCHAR(15),
feedback VARCHAR(255),
dateTaken DATE,
timeTaken TIME
)`);
});
app.post("/submit-feedback", (req, res) => {
    const { email, subject, feedback } = req.body;
    const dateTaken = new Date().toISOString().slice(0, 10);
    const timeTaken = new Date().toISOString().slice(11, 19);
    const stmt = db.prepare("INSERT INTO form (email, subject, feedback, dateTaken, timeTaken) VALUES (?, ?, ?, ?, ?)");
    stmt.run(email, subject, feedback, dateTaken, timeTaken, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error inserting feedback into the database.");
        } else {
            res.status(200).send("Feedback submitted successfully.");
        }
    });
    stmt.finalize();
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});