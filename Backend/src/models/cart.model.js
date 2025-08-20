import mongoose,{Schema} from "mongoose";

const cartSchema = new Schema({
  itemsId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  ]
})


export const Cart = mongoose.model("Cart", cartSchema)