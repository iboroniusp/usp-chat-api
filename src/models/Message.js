const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  //   Referencia a entidade User
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  }
});

module.exports = mongoose.model("Message", MessageSchema);
