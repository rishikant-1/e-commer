import app from "./app.js"; 
import dotenv from 'dotenv'
import connectDb from "./db/connectdb.js";



dotenv.config(
  {
    path: './.env'
  }
)

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is running on ${process.env.PORT || 3000}.✅`);
    })
    app.on("error", (err) => {
      throw new Error(`server error ${err}`)
    })
  })
  .catch((err) => {
    console.error(`MongoDb connection error ${err}`);
    process.exit(1)
  })

