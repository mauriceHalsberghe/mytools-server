import express from 'express';
import { PORT } from "./consts.js";

import * as API_UserController from "./controllers/userControllers.js";
import * as API_ImageController from "./controllers/imageControllers.js";

const app = express();

app.get('/', (req, res) => {
    res.send('User server is online and running');
});

app.get("/users", API_UserController.getUsers);
app.get("/images", API_ImageController.getImages);

app.listen(PORT, () => {
    console.log(`MyTools Server is online on http://localhost:${PORT}`);
}); 