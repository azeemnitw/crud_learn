import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import itemRoutes from './routes/item.routes';

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(cors());

app.use('/api/items',itemRoutes);
export default app;
