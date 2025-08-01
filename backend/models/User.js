const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // ต้องเข้ารหัส
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  phone: { type: String },
  avatar: { type: String },
});

module.exports = mongoose.model('User', userSchema);
