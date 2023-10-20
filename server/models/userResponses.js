const mongoose = require("mongoose");

// Define a UserResponse schema
const userResponseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    question1: {type: String, required: true},
    question2: {type: String, required: true},
    question3: {type: String, required: true},
    question4: {type: String, required: true},
    question5: {type: String, required: true},
    recommendedCourse: {type: String, required: true}
}, {
  timestamps: true,
});


const UserResponse = mongoose.model("UserResponse", userResponseSchema);

module.exports = UserResponse;