import express from 'express';
import Gallery from '../models/Gallery.js'; // Import the Gallery model

const router = express.Router();

// 🟢 GET all gallery items
router.get('/', async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
    res.json(galleryItems); // Return the list of gallery items
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST a new gallery item
router.post('/', async (req, res) => {
  try {
    const { title, image } = req.body;

    // Validate the input data
    if (!title || !image) {
      return res.status(400).json({ error: "Title and image URL are required" });
    }

    const newGalleryItem = new Gallery({ title, image });
    await newGalleryItem.save();

    res.status(201).json({ message: "Gallery item added successfully!", data: newGalleryItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 GET a single gallery item by ID
router.get('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) return res.status(404).json({ error: "Gallery item not found" });

    res.json(galleryItem); // Return the specific gallery item
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 UPDATE a gallery item
router.put('/:id', async (req, res) => {
  try {
    const { title, image } = req.body;

    // Ensure the data is available
    if (!title || !image) {
      return res.status(400).json({ error: "Title and image URL are required" });
    }

    // Find the gallery item by ID and update it
    const updatedGalleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, image },
      { new: true } // Return the updated document
    );

    if (!updatedGalleryItem) return res.status(404).json({ error: "Gallery item not found" });

    res.json({ message: "Gallery item updated successfully!", data: updatedGalleryItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 DELETE a gallery item
router.delete('/:id', async (req, res) => {
  try {
    // Delete the gallery item by ID
    const deletedGalleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedGalleryItem) return res.status(404).json({ error: "Gallery item not found" });

    res.json({ message: "Gallery item deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
