import express from 'express';
import dotenv from 'dotenv';
import logger from './Utils/Logger.js';


dotenv.config();
const app = express();


app.listen(process.env.PORT, () => {
    logger.info(`Server is running on port ${process.env.PORT}`);
})
