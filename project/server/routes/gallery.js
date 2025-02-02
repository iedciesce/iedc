import express from 'express';
import Gallery from '../models/gallery.js'; // Import the Gallery model

const router = express.Router();

// 🟢 GET all gallery items
router.get('/', async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ createdAt: -1 });
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST a new gallery item
router.post('/', async (req, res) => {
  try {
    const { title, image } = req.body;

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

    res.json(galleryItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 UPDATE a gallery item
router.put('/:id', async (req, res) => {
  try {
    const { title, image } = req.body;

    const updatedGalleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, image },
      { new: true } // Return updated document
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
    const deletedGalleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedGalleryItem) return res.status(404).json({ error: "Gallery item not found" });

    res.json({ message: "Gallery item deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
