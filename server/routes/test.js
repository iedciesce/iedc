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
router.get('/test-insert', async (req, res) => {
  try {
    const testData = new TestModel({ name: "John Doe", email: "john@example.com" });
    await testData.save();
    res.json({ message: "Data inserted, check MongoDB Compass!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
