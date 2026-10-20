import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Configuration from './models/Configuration.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow React frontend to connect
app.use(cors());
app.use(express.json());

// MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/power_tuning';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✓ Connected to MongoDB (power_tuning database)'))
  .catch((err) => console.error('✕ MongoDB Connection Error:', err));

// Save Build Route
app.post('/api/configurations', async (req, res) => {
  try {
    const { modelName, tuningStage, carbonPack, finish, totalHp, totalPrice } = req.body;

    const newConfig = new Configuration({
      modelName,
      tuningStage,
      carbonPack,
      finish,
      totalHp,
      totalPrice,
    });

    const savedConfig = await newConfig.save();
    res.status(201).json({ success: true, data: savedConfig });
  } catch (error) {
    console.error('Error saving configuration:', error);
    res.status(500).json({ success: false, message: 'Server error saving build' });
  }
});

// Fetch All Builds Route
app.get('/api/configurations', async (req, res) => {
  try {
    const configs = await Configuration.find().sort({ createdAt: -1 });
    res.json({ success: true, data: configs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not fetch configurations' });
  }
});

app.listen(PORT, () => {
  console.log(`✓ POWER TUNING Backend running on http://localhost:${PORT}`);
});