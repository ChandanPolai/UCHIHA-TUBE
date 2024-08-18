import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      throw new APIError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    if (!decodedToken) {
      throw new APIError(401, "Invalid Access Token");
    }

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken -watchHistory"
    );

    if (!user) {
      throw new APIError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new APIError(401, error?.message || "Invalid access token");
  }
});

export { verifyJWT };
