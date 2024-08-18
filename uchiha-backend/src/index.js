import dotenv from "dotenv";
import connectToDatabase from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectToDatabase()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("⚙️  Server is running on Port :", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED!!! ", err);
  });
