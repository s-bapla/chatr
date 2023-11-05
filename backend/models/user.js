const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.methods.authenticatePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified){
    next();
  }

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt)
});

const User = mongoose.model('user', userSchema);

module.exports = User

