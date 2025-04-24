const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://mauricehalsberghe.github.io/mytools",
  credentials: true
}));

app.use(bodyParser.json());
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

app.post("/login", (req, res) => {
    const users = JSON.parse(fs.readFileSync("users.json"));
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
      req.session.user = username;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });

app.get("/userdata", (req, res) => {
  if (!req.session.user) return res.sendStatus(403);
  const users = JSON.parse(fs.readFileSync("users.json"));
  res.json(users[req.session.user].data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
