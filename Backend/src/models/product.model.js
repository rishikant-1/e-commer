import mongoose, { Schema } from 'mongoose';

export const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 150
  },
  description: {
    type: String,
    maxlength: 1500
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    basePrice: { 
      type: Number, 
      required: true 
    },
    discount: { 
      type: Number, 
      default: 0 
    }
  },
  images: [String],
  ratings: {
    average: { 
      type: Number, 
      min: 0, 
      max: 5, 
      default: 0 
    },
    count: { 
      type: Number, 
      default: 0 
    }
  }
}, {
  timestamps: true
});
