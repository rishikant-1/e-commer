import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'
import ApiError from '../utils/apiError.js';
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },
    lastname: {
      type: String,
      trim: true,
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true, 
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'seller'],
    default: 'customer'
  },
  address: [
    {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      country: { type: String, trim: true },
      zipCode: { type: String, trim: true } 
    }
  ],
}, {
  timestamps: true
});


userSchema.pre('save',async function(next){
  if(!this.isModified("password")) return next()
  try {
    this.password = await bcrypt.hash(this.password, 12)
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isPasswordCorrect = async function(password){
  if(!password) throw new ApiError(400, 'password is required');
  const result = await bcrypt.compare(password, this.password)
  return result
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.fullname.firstname
    },
    process.env.ACCESS_TOKEN_SECRATE,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRATE,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model('User', userSchema)