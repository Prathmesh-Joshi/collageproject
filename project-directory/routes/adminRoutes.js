// const express = require('express');
// const Art = require('../models/artModel'); // Art Model
// const User = require('../models/userModel'); // User Model
// const router = express.Router();

// // Admin Authentication Middleware
// function checkAdmin(req, res, next) {
//   // Ideally, the authentication should be based on JWT or sessions
//   const { email, password } = req.body;
//   if (email === 'admin@example.com' && password === 'admin123') {
//     next();
//   } else {
//     return res.status(403).json({ message: 'Unauthorized access!' });
//   }
// }

// // Route to add new art
// router.post('/add-art', checkAdmin, async (req, res) => {
//   const { title, description, image, price } = req.body;
//   try {
//     const newArt = new Art({ title, description, image, price });
//     await newArt.save();
//     res.status(201).json({ message: 'Art added successfully!', art: newArt });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add art', error });
//   }
// });

// // Route to get all art
// router.get('/arts', checkAdmin, async (req, res) => {
//   try {
//     const arts = await Art.find({});
//     res.status(200).json(arts);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch arts', error });
//   }
// });

// // Route to delete art by ID
// router.delete('/delete-art/:artId', checkAdmin, async (req, res) => {
//   const { artId } = req.params;
//   try {
//     const deletedArt = await Art.findByIdAndDelete(artId);
//     if (!deletedArt) {
//       return res.status(404).json({ message: 'Art not found' });
//     }
//     res.status(200).json({ message: 'Art deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete art', error });
//   }
// });

// // Route to get all users
// router.get('/users', checkAdmin, async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch users', error });
//   }
// });

// // Route to delete user by ID
// router.delete('/delete-user/:userId', checkAdmin, async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const deletedUser = await User.findByIdAndDelete(userId);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete user', error });
//   }
// });

// module.exports = router;

//______________________________________________________________________________________________________________________________________

const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const Art = require('../models/artModel'); // Art Model
const User = require('../models/userModel'); // User Model
const router = express.Router();

// Admin Authentication Middleware
function checkAdmin(req, res, next) {
  // Ideally, the authentication should be based on JWT or sessions
  const { email, password } = req.body;
  if (email === 'admin@example.com' && password === 'admin123') {
    next();
  } else {
    return res.status(403).json({ message: 'Unauthorized access!' });
  }
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Use a unique filename
  },
});

const upload = multer({ storage });

// Route to add new art (with image upload)
router.post('/add-art', checkAdmin, upload.single('image'), async (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null; // Store the uploaded file's name

  if (!image) {
    return res.status(400).json({ message: 'Image is required!' });
  }

  try {
    const newArt = new Art({ title, description, image, price });
    await newArt.save();
    res.status(201).json({ message: 'Art added successfully!', art: newArt });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add art', error });
  }
});

// Route to get all art
router.get('/arts', async (req, res) => {
  try {
    const arts = await Art.find({});
    res.status(200).json(arts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch arts', error });
  }
});

// Route to delete art by ID
router.delete('/delete-art/:artId', async (req, res) => {
  const { artId } = req.params;
  try {
    const deletedArt = await Art.findByIdAndDelete(artId);
    if (!deletedArt) {
      return res.status(404).json({ message: 'Art not found' });
    }
    res.status(200).json({ message: 'Art deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete art', error });
  }
});

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

// Route to delete user by ID
router.delete('/delete-user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error });
  }
});

module.exports = router;
