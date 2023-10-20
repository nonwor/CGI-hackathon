const mongoose = require("mongoose");

// Define a UserResponse schema
const userResponseSchema = new mongoose.Schema({
  assessments: {
    eligibilityQuestionaire: {
      type: [
        {
          question: { type: String },
          answer: { type: Boolean },
        }
      ],
      default: [],
    },
    userInfo: {
      type: [
        {
          question: { type: String },
          answer: { type: String },
        }
      ],
      default: [],
    },
    behavioralQuestionaire: {
      type: [
        {
          question: { type: String },
          answer: { type: Number },
        }
      ],
      default: [],
    },
  }
}, {
  timestamps: true,
});


const UserResponse = mongoose.model("UserResponse", userResponseSchema);

module.exports = UserResponse;