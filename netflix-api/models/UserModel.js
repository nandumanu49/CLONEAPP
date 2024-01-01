const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      // Add more properties as needed
    },
  ],
});

module.exports = mongoose.model("users", userSchema);

