const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactsSchema = Schema(
  {
    email: {type: String, unique: true},
    contacts: [{ type: Schema.Types.ObjectId, ref: "users"}],
    
  },
  {
    timestamps: true,
  }
);
