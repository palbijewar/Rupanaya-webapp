import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import { dbConnection } from './config/db.js';
import routes from './routes/index.js';

dotenv.config();

dbConnection();

const app = express();

app.use(express.json());

app.use(multer().any());

app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
