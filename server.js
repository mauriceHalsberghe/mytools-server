const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://mauricehalsberghe.github.io",  // Allow requests from GitHub Pages domain
    credentials: true  // Ensure cookies are allowed
}));

app.use(bodyParser.json());
app.use(session({
    secret: "secret", 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }  // Ensure this is false for development (if using http instead of https)
  }));


// /
app.get("/", (req, res) => {
    res.send("Backend is running! Welcome to mytools-server.");
});

// /login
app.post("/login", (req, res) => {
    console.log("Session ID after login:", req.sessionID);  // Log session ID
    const users = JSON.parse(fs.readFileSync("users.json"));
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        req.session.user = username;  // Set session user
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

// /userdata
app.get("/userdata", (req, res) => {
    if (!req.session.user) {
        return res.sendStatus(403);  // Forbidden if no user in session
    }
    const users = JSON.parse(fs.readFileSync("users.json"));
    res.json(users[req.session.user].data);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
