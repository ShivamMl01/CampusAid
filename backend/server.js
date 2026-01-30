import express from 'express';
import connectDb from './config/mongodb.js';
import dotenv from 'dotenv';
import cors from "cors";
import travelRoutes from './routes/travelRoutes.js';
import errandRoutes from "./routes/errands.js";
import carpoolRoutes from "./routes/carpool.js";
import authRoutes from "./routes/authRoutes.js";
import emergencyRoutes from "./routes/emergencyRoutes.js";

 import sosRoutes from "./routes/sosRoutes.js";





dotenv.config();


const app = express();
const PORT  = process.env.PORT || 3000;
connectDb();


// Middleware
app.use(cors());
app.use(express.json());


// travel routes
app.use("/api/travel", travelRoutes);
app.use("/api/errands", errandRoutes);
app.use("/api/carpool", carpoolRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/sos", sosRoutes);
app.use("/api/emergency", emergencyRoutes);




app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});