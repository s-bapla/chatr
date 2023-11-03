const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = Schema(
  {
    sentBy: { type: Schema.Types.ObjectId, ref: "users" },
    message: { type: String },
    chat: { type: Schema.Types.ObjectId, ref: "chats" },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('message', messageSchema)

module.exports = Message;