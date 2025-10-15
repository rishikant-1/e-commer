import mongoose, { Schema } from 'mongoose';
import { CATEGORY_TAX } from '../constant/taxes.js';

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
    enum: Object.keys(CATEGORY_TAX),
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
    },
    discountedPrice: {
      type: Number,
      default: 0
    },
    taxPrice: {
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


productSchema.pre("save", function(next){
  let taxRate = CATEGORY_TAX[this.category] ?? CATEGORY_TAX["others"]

  const base = this.price.basePrice || 0;
  const discount = this.price.discount || 0;

  const taxAmount = base * taxRate;
  const discountedPrice = base - (base * discount) / 100;
  const final = discountedPrice + taxAmount;

  this.price.taxPrice = taxAmount;
  this.price.discountedPrice = final;

  next();
})

export const Product = mongoose.model("Product", productSchema)