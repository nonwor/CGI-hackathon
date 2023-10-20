const express = require('express');
const router = express.Router();
const UserResponse = require('../models/userResponses');

// Get all user responses with optional limit
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const userResponses = await UserResponse.find({}).limit(limit);

    res.json(userResponses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user responses.' });
  }
});

// Create a new user response
router.post('/', async (req, res) => {
  try {
    const { assessments } = req.body;
    const savedResponse = await UserResponse.create({ assessments });
    
    res.status(201).json(savedResponse);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user response document.' });
  }
});


module.exports = router;