// // __________________________________________________ART IS ADDED NOT SHOWING_________________________________________________

// const express = require('express'); // Require dependencies
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs'); // Required for hashing passwords
// const multer = require('multer'); // Middleware for file uploads
// const path = require('path');

// // Initialize app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
// app.use('/uploads', express.static('uploads')); // Serve uploaded images

// // Connect to MongoDB
// mongoose
//   .connect('mongodb://127.0.0.1:27017/userDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   contact: String,
//   userType: { type: String, enum: ['buyer', 'artist'], default: 'buyer' },
//   password: String,
// });

// const artSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   price: Number,
// });

// const User = mongoose.model('User', userSchema);
// const Art = mongoose.model('Art', artSchema);

// // Predefined Admin Credentials (hashed for security)
// const adminCredentials = {
//   email: 'admin@example.com',
//   password: bcrypt.hashSync('admin123', 10), // Storing hashed password
// };

// // Admin Authentication Middleware
// function checkAdmin(req, res, next) {
//   const { email, password } = req.body;

//   if (email === adminCredentials.email) {
//     bcrypt.compare(password, adminCredentials.password, (err, isMatch) => {
//       if (err || !isMatch) {
//         return res.status(403).json({ message: 'Unauthorized access!' });
//       }
//       next();
//     });
//   } else {
//     res.status(403).json({ message: 'Unauthorized access!' });
//   }
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Save files to the 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // Use unique filenames
//   },
// });

// const upload = multer({ storage });

// // Admin Login Route
// app.post('/admin/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (email === adminCredentials.email) {
//     const isMatch = await bcrypt.compare(password, adminCredentials.password);
//     if (isMatch) {
//       return res.json({ message: 'Admin login successful!', isAdmin: true });
//     } else {
//       return res.json({ message: 'Invalid admin password!' });
//     }
//   }

//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.json({ message: 'Invalid email or password!' });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.json({ message: 'Invalid email or password!' });
//   }

//   res.json({ message: 'Login successful!', isAdmin: false });
// });

// // Signup Route for Users
// app.post('/signup', async (req, res) => {
//   const { firstName, lastName, email, contact, userType, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.json({ message: 'Passwords do not match!' });
//   }

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.json({ message: 'User already exists!' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     firstName,
//     lastName,
//     email,
//     contact,
//     userType,
//     password: hashedPassword,
//   });

//   await newUser.save();
//   res.json({ message: 'User registered successfully!' });
// });

// // Add new art (with image upload)
// app.post('/admin/add-art', upload.single('image'), async (req, res) => {
//   const { title, description, price } = req.body;
//   const image = req.file ? req.file.filename : null;

//   if (!image) {
//     return res.status(400).json({ message: 'Image is required!' });
//   }

//   try {
//     const newArt = new Art({ title, description, image, price });
//     await newArt.save();
//     res.status(201).json({ message: 'Art added successfully!', art: newArt });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add art', error });
//   }
// });

// // Get all arts
// app.get('/admin/arts', async (req, res) => {
//   try {
//     const arts = await Art.find({});
//     res.status(200).json(arts);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch arts', error });
//   }
// });

// // Delete art by ID
// app.delete('/admin/delete-art/:artId', async (req, res) => {
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

// // Get all users
// app.get('/admin/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch users', error });
//   }
// });

// // Delete user by ID
// app.delete('/admin/delete-user/:userId', async (req, res) => {
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

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// _______________________________________________FOR ADDINNG AND FOR SHOWING ART___________________________________________________



// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const multer = require('multer');  // Add multer for file upload handling
// const path = require('path');

// // Initialize app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
// app.use('/uploads', express.static('uploads')); // Serve files from the 'uploads' directory

// // Connect to MongoDB
// mongoose
//   .connect('mongodb://127.0.0.1:27017/userDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   contact: String,
//   userType: { type: String, enum: ['buyer', 'artist'], default: 'buyer' },
//   password: String,
// });

// const artSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true }, // Image filename
//   price: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const User = mongoose.model('User', userSchema);
// const Art = mongoose.model('Art', artSchema);

// // Multer Configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Destination folder for uploaded images
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // Save with a unique name
//   }
// });

// const upload = multer({ storage: storage });

// // Predefined Admin Credentials (hashed for security)
// const adminCredentials = {
//   email: 'admin@example.com',
//   password: bcrypt.hashSync('admin123', 10), // Storing hashed password
// };

// // Admin Login Route
// app.post('/admin/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Check if the login is for admin
//   if (email === adminCredentials.email) {
//     // Validate admin password
//     const isMatch = await bcrypt.compare(password, adminCredentials.password);
//     if (isMatch) {
//       return res.json({ message: 'Admin login successful!', isAdmin: true });
//     } else {
//       return res.json({ message: 'Invalid admin password!' });
//     }
//   }

//   // If not admin, check for regular user login
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.json({ message: 'Invalid email or password!' });
//   }

//   // Compare the password with the hashed password stored in the database
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.json({ message: 'Invalid email or password!' });
//   }

//   // Send a success message if login is successful for a regular user
//   res.json({ message: 'Login successful!' });
// });

// // Admin Routes for Managing Arts and Users

// // Add new art (with image upload)
// app.post('/admin/add-art', upload.single('image'), async (req, res) => {
//   const { title, description, price } = req.body;
//   const image = req.file ? req.file.filename : null; // Ensure image is available

//   if (!image) {
//     return res.status(400).json({ message: 'Image is required!' });
//   }

//   try {
//     const newArt = new Art({ title, description, image, price });
//     await newArt.save();
//     res.status(201).json({ message: 'Art added successfully!', art: newArt });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add art', error });
//   }
// });

// // Get all arts
// app.get('/admin/art', async (req, res) => {
//   try {
//     const arts = await Art.find({});
//     res.status(200).json(arts);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch arts', error });
//   }
// });

// // Delete art by ID
// app.delete('/admin/delete-art/:artId', async (req, res) => {
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

// // Get all users
// app.get('/admin/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch users', error });
//   }
// });

// // Delete user by ID
// app.delete('/admin/delete-user/:userId', async (req, res) => {
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

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



// _________________________________________________________________MERGE_______________________________________________________


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const multer = require('multer');  // Add multer for file upload handling
const path = require('path');

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use('/uploads', express.static('uploads')); // Serve files from the 'uploads' directory

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  contact: String,
  userType: { type: String, enum: ['buyer', 'artist'], default: 'buyer' },
  password: { type: String, required: true },
});

const artSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Image filename
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Art = mongoose.model('Art', artSchema);

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Save with a unique name
  },
});

const upload = multer({ storage: storage });

// Predefined Admin Credentials (hashed for security)
const adminCredentials = {
  email: 'admin@example.com',
  password: bcrypt.hashSync('admin123', 10), // Storing hashed password
};

// Admin Authentication Middleware
function checkAdmin(req, res, next) {
  const { email, password } = req.body;

  if (email === adminCredentials.email) {
    bcrypt.compare(password, adminCredentials.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(403).json({ message: 'Unauthorized access!' });
      }
      next();
    });
  } else {
    res.status(403).json({ message: 'Unauthorized access!' });
  }
}

// Admin Login Route
app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  if (email === adminCredentials.email) {
    const isMatch = await bcrypt.compare(password, adminCredentials.password);
    if (isMatch) {
      return res.json({ message: 'Admin login successful!', isAdmin: true });
    } else {
      return res.json({ message: 'Invalid admin password!' });
    }
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: 'Invalid email or password!' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: 'Invalid email or password!' });
  }

  res.json({ message: 'Login successful!' });
});

// Signup Route for Users
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, contact, userType, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.json({ message: 'Passwords do not match!' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ message: 'User already exists!' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    contact,
    userType,
    password: hashedPassword,
  });

  await newUser.save();
  res.json({ message: 'User registered successfully!' });
});

// Add new art (with image upload)
app.post('/admin/add-art', checkAdmin, upload.single('image'), async (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null; // Ensure image is available

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

// Get all arts
app.get('/admin/arts', checkAdmin, async (req, res) => {
  try {
    const arts = await Art.find({});
    res.status(200).json(arts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch arts', error });
  }
});

// Delete art by ID
app.delete('/admin/delete-art/:artId', checkAdmin, async (req, res) => {
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

// Get all users (Admin Only)
app.get('/admin/users', checkAdmin, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
});

// Delete user by ID (Admin Only)
app.delete('/admin/delete-user/:userId', checkAdmin, async (req, res) => {
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

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//above code is merged code ,  //admin can login bu cant do operations