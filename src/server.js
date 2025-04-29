import express from 'express';

import { PORT } from "./consts.js";

import * as API_UserController from "./controllers/userControllers.js";


const app = express();

app.get('/', (req, res) => {
    res.send('User server is online and running');
});

app.get("/users", API_UserController.getUsers);

app.listen(PORT, () => {
    console.log(`Onze server is aan het luisteren op: http://localhost:${PORT}`);
});
