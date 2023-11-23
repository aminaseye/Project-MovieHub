import express, { Application, Request, Response } from 'express';
import { userRoutes } from './routes/userRoutes';
import { connectDB } from './config/database';


const app: Application = express();
app.use(express.json())

app.use('/api/v1/users', userRoutes)



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
