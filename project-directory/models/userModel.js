// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: { type: String, unique: true, required: true },
//   contact: String,
//   userType: { type: String, enum: ['buyer', 'artist'], default: 'buyer' },
//   password: String,
// });

// // Pre-save middleware to hash password before saving
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// module.exports = mongoose.model('User', userSchema);



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contact: String,
  userType: { type: String, enum: ['buyer', 'artist'], default: 'buyer' },
  password: String,
});

module.exports = mongoose.model('User', userSchema);

