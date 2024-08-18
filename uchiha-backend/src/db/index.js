import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      `MONGODB Connected!! DB Host : ${connectionInstance?.connection.host}`
    );
  } catch (err) {
    console.log("MONGODB CONNECTION FAILED :: ", err);
    process.exit(1);
  }
}

export default connectToDatabase;

// async function connectToDatabase() {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.DATABASE_URL}/${DB_NAME}`
//     );

//     console.log(
//       `MONGODB Connected!! DB Host : ${connectionInstance.connection.host}\n${connectionInstance}`
//     );

//     app.listen(process.env.PORT, () => {
//       console.log("Server is running on Port ", process.env.PORT);
//     });
//   } catch (err) {
//     console.log("MONGODB CONNECTION FAILED :: ", err);
//     process.exit(1);
//   }
// }
