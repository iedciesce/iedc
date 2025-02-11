import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Define a sample schema
const TestSchema = new mongoose.Schema({
  name: String,
  email: String
});

const TestModel = mongoose.model('Test', TestSchema);

// Add sample data to trigger database creation
router.get('/ping', async (req, res) => {
 console.log("server is fine ");
});

export default router;
