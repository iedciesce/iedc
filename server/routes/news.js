import express from 'express';
import News from '../models/News.js'; // Import the News model

const router = express.Router();

// 🟢 GET all news articles
router.get('/', async (req, res) => {
  try {
    const newsArticles = await News.find().sort({ createdAt: -1 }); // Sort by date
    // Transform each article to include the createdAt as 'date'
    const transformedArticles = newsArticles.map(article => ({
      ...article.toObject(),
      date: article.createdAt.toISOString().split('T')[0], // Convert date to string format YYYY-MM-DD
    }));
    res.json(transformedArticles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 POST a new news article
router.post('/', async (req, res) => {
  try {
    const { title, content, image } = req.body;

    // Validate input
    if (!title || !content || !image) {
      return res.status(400).json({ error: "All fields (title, content, image) are required" });
    }

    const newNews = new News({ title, content, image });
    await newNews.save();

    // Include createdAt as date in response
    const newsWithDate = {
      ...newNews.toObject(),
      date: newNews.createdAt.toISOString().split('T')[0], // Convert date to string format YYYY-MM-DD
    };

    res.status(201).json({ message: "News article created successfully!", data: newsWithDate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 GET a single news article by ID
router.get('/:id', async (req, res) => {
  try {
    const newsArticle = await News.findById(req.params.id);
    if (!newsArticle) return res.status(404).json({ error: "News article not found" });

    // Include createdAt as date in response
    const newsWithDate = {
      ...newsArticle.toObject(),
      date: newsArticle.createdAt.toISOString().split('T')[0], // Convert date to string format YYYY-MM-DD
    };

    res.json(newsWithDate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 UPDATE a news article
router.put('/:id', async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const updatedNewsArticle = await News.findByIdAndUpdate(
      req.params.id,
      { title, content, image },
      { new: true } // Return updated document
    );

    if (!updatedNewsArticle) return res.status(404).json({ error: "News article not found" });

    // Include createdAt as date in response
    const newsWithDate = {
      ...updatedNewsArticle.toObject(),
      date: updatedNewsArticle.createdAt.toISOString().split('T')[0], // Convert date to string format YYYY-MM-DD
    };

    res.json({ message: "News article updated successfully!", data: newsWithDate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 DELETE a news article
router.delete('/:id', async (req, res) => {
  try {
    const deletedNewsArticle = await News.findByIdAndDelete(req.params.id);
    if (!deletedNewsArticle) return res.status(404).json({ error: "News article not found" });

    res.json({ message: "News article deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
