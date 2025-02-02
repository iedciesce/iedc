import express from 'express';
import Event from '../models/event.js'; // Import the Event model

const router = express.Router();

// 🟢 GET all events (Sorted by date descending)
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }); // Get all events, sorted by date descending
    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found' });
    }
    res.json(events);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ error: 'Server error while fetching events' });
  }
});

// 🟢 POST a new event
router.post('/', async (req, res) => {
  try {
    const { title, description, date, image, googleFormLink, registrationStatus } = req.body;

    // Validate input fields
    if (!title || !description || !date || !image || registrationStatus === undefined) {
      return res.status(400).json({ error: 'All fields (title, description, date, image, registrationStatus) are required' });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      image,
      googleFormLink,
      registrationStatus,
    });

    await newEvent.save();

    res.status(201).json({
      message: 'Event created successfully!',
      data: newEvent,
    });
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).json({ error: 'Server error while creating event' });
  }
});

// 🟢 GET a single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Server error while fetching event' });
  }
});

// 🟢 UPDATE an event
router.put('/:id', async (req, res) => {
  try {
    const { title, description, date, image, googleFormLink, registrationStatus } = req.body;

    // Validate input fields
    if (!title || !description || !date || !image || registrationStatus === undefined) {
      return res.status(400).json({ error: 'All fields (title, description, date, image, registrationStatus) are required' });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, date, image, googleFormLink, registrationStatus },
      { new: true } // Return updated document
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({
      message: 'Event updated successfully!',
      data: updatedEvent,
    });
  } catch (err) {
    console.error('Error updating event:', err);
    res.status(500).json({ error: 'Server error while updating event' });
  }
});

// 🟢 DELETE an event
router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json({
      message: 'Event deleted successfully!',
    });
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ error: 'Server error while deleting event' });
  }
});

export default router;
