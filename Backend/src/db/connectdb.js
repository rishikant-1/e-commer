import mongoose from 'mongoose'

const connectdb = async () =>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/e_commerse`)
    console.log(`db connection successfully😊 ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Something went wrong while connecting db😒");
    process.exit(1) 
  }
}

export default connectdb