const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/adminModel');

const createAdmin = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/userDB');

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Admin({ email: 'admin@example.com', password: hashedPassword });

    await admin.save();
    console.log('Admin user created successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin:', error);
    mongoose.connection.close();
  }
};

createAdmin();
