import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
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
    type: String,
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
  brand: String,
  model: String,
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  images: [
    {
      url: String,
      public_id: String
    }
  ],
  thumbnail: {
    url: String,
    public_id: String
  },
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


export const Product = mongoose.model("Product", productSchema)