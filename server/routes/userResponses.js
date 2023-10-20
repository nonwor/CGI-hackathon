const express = require('express');
const router = express.Router();
const UserResponse = require('../models/userResponses');
const { verifyAdmin } = require('../middleware/index')

// Get all user responses with optional limit
router.get('/', verifyAdmin, async (req, res) => {
  try {
    if (!req.admin) {
      return res.status(401).json({ error: 'Unauthorized: User is not an admin' });
    }

    const limit = parseInt(req.query.limit) || 10;
    const userResponses = await UserResponse.find({}).limit(limit);

    res.json(userResponses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user responses.' });
  }
});

// Create a new user-response
router.post('/', async (req, res) => {
  try {
    // const { assessments } = req.body;
    console.log(req.body)
    const savedResponse = await UserResponse.create({ ...req.body });
    
    res.status(201).json(savedResponse);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user response document.' });
  }
});


module.exports = router;