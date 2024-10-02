import mongoose from 'mongoose';

// Define the FoodItem schema
const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Snack', 'Beverage'],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Define the Restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    match: /.+@.+\..+/,
  },
  cuisine: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  deliveryAvailable: {
    type: Boolean,
    default: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'], // Define the type of the GeoJSON
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  foodItems: [foodItemSchema], // Embedding food items
});

// Create a 2dsphere index for geospatial queries
restaurantSchema.index({ location: '2dsphere' });

// Create models from the schemas
export const FoodItem = mongoose.model('FoodItem', foodItemSchema);
export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
