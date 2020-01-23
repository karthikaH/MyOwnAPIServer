import express from 'express';
/*
 * A middleware
 * json helps you attach the request payload to req.body after parsing the bits of data into string
 * urlencoded to support query string in URLs
 */
import { json, urlencoded } from 'body-parser';
/*
 * To allow Cross origin resource sharing
 */
import cors from 'cors';

const app = express();

// Middlewares transforming the request
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// here the callback is the controller that responds to request
app.get('/', (req, res) => {
  res.send({ status: 'SUCCESS' });
});

export const startServer = () => {
  app.listen(3001, () => {
    console.log(`REST API on http://0.0.0.0:3001/`);
  });
};
