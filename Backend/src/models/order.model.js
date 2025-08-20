import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  orderStatus: {
    type: String,
    enum: ["Canceled", "Delevered", "Pending"],
    default: "Pending"
  },
  paymentMethod: {
    type: String,
    required: true
  },
  itemsId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    }
  ]
})

export const Oders = mongoose.model("Oders", orderSchema)