import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        // required: true
      },
      quantity: {
        type: Number,
        default: 1,
        min: [1, 'Quantity must be at least 1']
      },
    }
  ]
}, {
  timestamps: true
})


export const Cart = mongoose.model("Cart", cartSchema)