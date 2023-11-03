const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified){
    next()
  }
})

const User = mongoose.model('user', userSchema);

module.exports = User

