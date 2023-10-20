const mongoose = require("mongoose");

// Define a UserResponse schema
const userResponseSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  assessments: {
    eligibilityQuestionaire: {
      type: Object,
      default: {},
    },
    userInfo: {
      type: Object,
      default: {},
    },
    behavioralQuestionaire: {
      type: Object,
      default: {},
    },
  },
},
{
  timestamps: true,
});

// Create a UserResponse model
const UserResponse = mongoose.model("UserResponse", userResponseSchema);

module.exports = UserResponse;