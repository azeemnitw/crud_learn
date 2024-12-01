import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config();

connectDB();

const PORT=5003;

app.listen(PORT,()=>{
    console.log('server is running on http://localhost:${PORT}');
});

