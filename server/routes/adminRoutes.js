const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/admins');

// Register an admin user
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create admin user' });
  }
});


// Login an admin user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password); 

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});


module.exports = router;
