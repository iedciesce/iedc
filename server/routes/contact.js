import express from 'express';
import Contact from '../models/Contact.js'; // Import the Contact model

const router = express.Router();

// 🟢 GET all contact messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create new contact message
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!", data: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 DELETE a contact message by ID
router.delete('/:id', async (req, res) => {
  try {
    const contactId = req.params.id;

    // Try to find and delete the contact by its ID
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    // If no contact found, return 404
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact message not found" });
    }

    res.json({ message: "Contact message deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
