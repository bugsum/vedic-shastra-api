import express, { Application } from 'express';
import dotenv from 'dotenv';
import scriptureRoutes from './routes/scriptureRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import { setupSwagger } from './utils/swagger';
import cors from 'cors';

dotenv.config();

const app: Application = express();

setupSwagger(app);
app.use(express.json());
app.use(cors());

app.use('/api/scriptures', scriptureRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
