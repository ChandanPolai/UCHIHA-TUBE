import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const checkUser = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (accessToken) {
      const decodedToken = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET
      );

      if (!decodedToken) next();

      const user = await User.findById(decodedToken._id).select(
        "-password -refreshToken"
      );

      if (!user) next();

      req.user = user;
    }

    next();
  } catch (error) {
    throw new APIError(401, error?.message || "Invalid access token");
  }
});

export { checkUser };
