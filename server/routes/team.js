import express from 'express';
import Team from '../models/Team.js'; // Import the Team model

const router = express.Router();

// 🟢 GET all team members
router.get('/', async (req, res) => {
  try {
    const teamMembers = await Team.find().sort({ priority: -1, createdAt: -1 }); // Sort by priority and then by creation date
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST a new team member
router.post('/', async (req, res) => {
  try {
    const { name, position, image, priority, social } = req.body;

    // Validate input
    if (!name || !position || !image) {
      return res.status(400).json({ error: "All fields (name, position, image) are required" });
    }

    const newTeamMember = new Team({ name, position, image, priority, social });
    await newTeamMember.save();

    res.status(201).json({ message: "Team member added successfully!", data: newTeamMember });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 GET a single team member by ID
router.get('/:id', async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) return res.status(404).json({ error: "Team member not found" });

    res.json(teamMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 UPDATE a team member
router.put('/:id', async (req, res) => {
  try {
    const { name, position, image, priority, social } = req.body;

    const updatedTeamMember = await Team.findByIdAndUpdate(
      req.params.id,
      { name, position, image, priority, social },
      { new: true } // Return updated document
    );

    if (!updatedTeamMember) return res.status(404).json({ error: "Team member not found" });

    res.json({ message: "Team member updated successfully!", data: updatedTeamMember });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 DELETE a team member
router.delete('/:id', async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeamMember) return res.status(404).json({ error: "Team member not found" });

    res.json({ message: "Team member deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
