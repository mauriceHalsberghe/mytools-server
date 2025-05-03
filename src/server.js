import express from 'express';
import { PORT } from "./consts.js";
import cors from 'cors';

import * as API_UserController from "./controllers/userControllers.js";
import * as API_ImageController from "./controllers/imageControllers.js";

const app = express();

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'https://mauricehalsberghe.github.io'
];
  

  app.use(cors({
    origin: function (origin, callback) {
        console.log('Request origin:', origin); // Debug line
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        } else {
          return callback(new Error('Not allowed by CORS'));
        }
      }
  }));

app.get('/', (req, res) => {
    res.send('User server is online and running');
});

app.get("/users", API_UserController.getUsers);
app.get("/images", API_ImageController.getImages);

app.listen(PORT, () => {
    console.log(`MyTools Server is online on http://localhost:${PORT}`);
}); 