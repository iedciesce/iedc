import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import newsRoutes from './routes/news.js';
import galleryRoutes from './routes/gallery.js';
import teamRoutes from './routes/team.js';
import contactRoutes from './routes/contact.js';
import testRoutes from './routes/test.js';
import axios from 'axios';  // Import Axios for pinging

 // Correct import

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route (for testing purposes)
app.use('/api/test', testRoutes);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);



// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('============== MongoDB Database Connected Successfully ==============');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// 🔄 Function to Ping API Every 1 Minute
async function pingServer() {
  const url = 'https://img-converter.onrender.com/ping';
  try {
    const response = await axios.get(url);
    console.log(`✅ Ping successful: ${response.status} ${response.statusText}`);
  } catch (error) {
    console.error('❌ Ping failed:', error.message);
  }
}

// Start pinging every 60 seconds
setInterval(pingServer, 60 * 10000);
