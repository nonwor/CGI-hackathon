const express = require("express");
const router = express.Router();
const UserResponse = require("../models/userResponses");

// Create a new user response
router.post("/", async (req, res) => {
  try {
    const { user, assessments } = req.body;

    const userResponse = new UserResponse({ user, assessments });
    const savedResponse = await userResponse.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user response." });
  }
});

// Get a user's responses by user ID
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userResponses = await UserResponse.find({ user: userId });

    res.json(userResponses);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user responses." });
  }
});

// Update a user's responses by user ID
router.put("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { assessments } = req.body;

    const updatedResponse = await UserResponse.findOneAndUpdate(
      { user: userId },
      { assessments },
      { new: true }
    );

    if (!updatedResponse) {
      return res.status(404).json({ error: "User response not found." });
    }

    res.json(updatedResponse);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user response." });
  }
});

module.exports = router;