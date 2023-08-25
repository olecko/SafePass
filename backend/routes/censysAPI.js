const express = require('express');
const router = express.Router();
const censysController = require('../controllers/censysController');
const userMiddleware = require('../middleware/userMiddleware');
require('dotenv').config();

router.get('/search', userMiddleware.getUserById, async (req, res) => {
  try {
    const query = req.query.query;

    // Call the search function from the controller
    const searchData = await censysController.search(query);

    res.status(200).json(searchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
