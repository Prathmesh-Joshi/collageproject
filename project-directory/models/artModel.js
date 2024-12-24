// const mongoose = require('mongoose');

// const artSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true }, // Image URL or filename
//   price: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Art', artSchema);


//___________________________________________________

const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'], 
    trim: true, 
    minlength: [3, 'Title must be at least 3 characters long'] 
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'], 
    trim: true, 
    minlength: [10, 'Description must be at least 10 characters long'] 
  },
  image: { 
    type: String, 
    required: [true, 'Image is required'], 
    validate: {
      validator: function(v) {
        return /^uploads\/.+\.(jpg|jpeg|png|gif)$/i.test(v); // Ensure the image path is valid
      },
      message: 'Invalid image file path or format'
    }
  },
  price: { 
    type: Number, 
    required: [true, 'Price is required'], 
    min: [0, 'Price must be greater than or equal to 0'] 
  },
  category: { 
    type: String, 
    default: 'Uncategorized' 
  }, // Optional field for artwork categorization
  artistId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }, // Optional field to link the art to an artist
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('Art', artSchema);
