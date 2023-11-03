const mongoose = require("mongoose");

const Schema = mongoose.Schema

const chatSchema = Schema({
  chatName: { type: String, trim: true },
  groupChat: { type: Boolean, default: false },
  contacts: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  Admin: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  latestMessage: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }},
  {
    timestamps: true
  }
);

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat