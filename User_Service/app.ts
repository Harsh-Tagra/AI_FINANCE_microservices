import env  from 'dotenv';
import {routes} from './routes/index.routes'
env.config()
import express from 'express'
const app = express();

const router = express.Router();

const PORT = process.env.APP_PORT || 8000;

app.use(express.json());
router.use('/api',routes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})