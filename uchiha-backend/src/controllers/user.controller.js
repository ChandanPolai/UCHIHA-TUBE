import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import { User } from "../models/user.model.js";
import {
  deleteImageOnCloudinary,
  uploadPhotoOnCloudinary as uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { APIResponse } from "../utils/APIResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// TODO: Review and Enhance all controllers

const generateAccessAndRefreshToken = async (_id) => {
  try {
    const user = await User.findById(_id);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    throw new APIError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // Get the data from frontend
  // Validate the data - Check if empty or not
  // check if user exists or not
  // Handle file uploads
  // upload files in cloudinary
  // create user
  // check if user created successfully
  // send back the response

  // Getting the data from frontend
  let { username, password, fullName, email } = req.body;

  // Validating and formating the data
  if (
    [username, password, fullName, email].some((field) => field?.trim() === "")
  ) {
    throw new APIError(400, `all fields are required!!!`);
  }

  // checking if user exists or not
  const userExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (userExist) {
    // throw new APIError(400, "User Already Exists...");
    return res
      .status(400)
      .json(new APIResponse(400, [], "User Already Exists..."));
  }

  // Handling File

  let avatarLocalPath = "";
  if (req.files && req.files.avatar && req.files?.avatar.length > 0) {
    avatarLocalPath = req.files?.avatar[0]?.path;
  }

  let coverImageLocalPath = "";
  if (req.files && req.files.coverImage && req.files?.coverImage.length > 0) {
    coverImageLocalPath = req.files?.coverImage[0]?.path;
  }

  if (!avatarLocalPath) {
    throw new APIError(400, "avatar Image is Required");
  }

  // uploading on cloudinary

  let avatarRes = await uploadOnCloudinary(avatarLocalPath);
  if (!avatarRes)
    throw new APIError(500, "Internal Server Error!!! Files Unable to Upload");

  let coverImageRes = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : "";

  // Create new user
  const createdUser = await User.create({
    username: username.toLowerCase(),
    password,
    email,
    fullName,
    coverImage: coverImageRes?.url || "",
    avatar: avatarRes.url,
  });

  // checking if user is created successfully

  const userData = await User.findById(createdUser._id).select(
    "-password -refreshToken"
  );

  if (!userData) {
    throw new APIError(500, "Something went wrong while registering the user");
  }

  // Send back data to frontend
  return res
    .status(201)
    .json(new APIResponse(200, userData, "Account Created Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // data <- req.body
  // validate data
  // find User
  // generate tokens
  // store tokens in database
  // set tokens in cookie
  // send response

  // data <- req.body

  let { email, password, username } = req.body;
  console.log(email, password, username)

  // validate
  if ((!email && !username) || !password) {
    throw new APIError(400, "Username or Email is required");
  }

  // find User
  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    // throw new APIError(404, "User not Found");
    return res.status(404).json(new APIResponse(404, [], "User not Found"));
  }

  const isCredentialValid = await user.isPasswordCorrect(password);
  if (!isCredentialValid) {
    // throw new APIError(401, "Credential Invalid");
    return res
      .status(401)
      .json(new APIResponse(401, [], "Invalid Credentials"));
  }

  // generate and store tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -watchHistory"
  );

  // set tokens in cookie and send response
  // const cookieOptions = {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "None",
  //   Partitioned: true,
  // };

  res.setHeader(
    "Set-Cookie",
    `accessToken=${accessToken}; Max-Age=${1 * 24 * 60 * 60 * 1000}; Path=/; HttpOnly; SameSite=None; Secure; Partitioned`
  );

  // res.setHeader(
  //   "Set-Cookie",
  //   `__Host-refreshToken=${refreshToken}; Max-Age=${10 * 24 * 60 * 60 * 1000}; Path=/; HttpOnly; SameSite=None; Secure; Partitioned`
  // );

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "Logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  res.setHeader(
    "Set-Cookie",
    `accessToken=; Max-Age=-1; Path=/; HttpOnly; SameSite=None; Secure; Partitioned`
  );

  // .clearCookie("accessToken", {
  //   ...cookieOptions,
  //   maxAge: 1 * 24 * 60 * 60 * 1000,
  // })
  // .clearCookie("refreshToken", {
  //   ...cookieOptions,
  //   maxAge: 10 * 24 * 60 * 60 * 1000,
  // })

  return res
    .status(200)
    .json(new APIResponse(200, {}, "Logged out Successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new APIError(401, "unauthorized request");
  }

  try {
    const decodedRefreshToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedRefreshToken?._id);

    if (!user) {
      throw new APIError(401, "Invalid Refresh Token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new APIError(401, "Refresh token is expired or used");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      Partitioned: true,
    };

    res.setHeader(
      "Set-Cookie",
      `accessToken=${accessToken}; Max-Age=${1 * 24 * 60 * 60 * 1000}; Path=/; HttpOnly; SameSite=None; Secure; Partitioned`
    );

    // res.setHeader(
    //   "Set-Cookie",
    //   `refreshToken=${refreshToken}; Max-Age=${10 * 24 * 60 * 60 * 1000}; Path=/; HttpOnly; SameSite=None; Secure; Partitioned`
    // );

    return res
      .status(200)
      .json(
        new APIResponse(
          200,
          { accessToken, newRefreshToken: refreshToken },
          "Access Token Granted Successfully"
        )
      );
  } catch (error) {
    throw new APIError(401, error?.message || "Invalid refresh token");
  }
});

// TODO Remove password from response.... .lean()

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  // Caution
  if (!oldPassword || !newPassword) {
    throw new APIError(400, "All Fields Required");
  }

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new APIError(401, "Old Password is not Correct");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new APIResponse(200, {}, "Password Changed Successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new APIResponse(201, req.user, "User fetched Successfully"));
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, email, username, description } = req.body;

  if (!fullName && !email && !username && !description) {
    throw new APIError(400, "At least one field required");
  }

  const user = await User.findById(req.user?._id);

  if (fullName) user.fullName = fullName;

  if (email) user.email = email;

  if (description) user.description = description;

  if (username) {
    const isExists = await User.find({ username });
    if (isExists?.length > 0) {
      throw new APIError(400, "Username not available");
    } else {
      user.username = username;
    }
  }

  const updatedUserData = await user.save();

  if (!updatedUserData) {
    new APIError(500, "Error while Updating User Data");
  }

  delete updatedUserData.password;

  return res
    .status(200)
    .json(
      new APIResponse(200, updatedUserData, "Profile updated Successfully")
    );
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath) {
    throw new APIError(400, "File required");
  }

  const avatarImg = await uploadOnCloudinary(avatarLocalPath);

  if (!avatarImg) {
    throw new APIError(500, "Error Accured While uploading File");
  }

  await deleteImageOnCloudinary(req.user?.avatar);

  const updatedUser = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: { avatar: avatarImg.url },
    },
    {
      new: true,
    }
  ).select("-password");

  if (!updatedUser) {
    new APIError(500, "Error while Updating database");
  }

  return res
    .status(200)
    .json(new APIResponse(200, updatedUser, "avatar updated Successfully"));
});

const updateUserCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;

  if (!coverImageLocalPath) {
    throw new APIError(400, "File required");
  }

  const coverImg = await uploadOnCloudinary(coverImageLocalPath);
  if (!coverImg) {
    throw new APIError(500, "Error Accured While uploading File");
  }

  await deleteImageOnCloudinary(req.user?.coverImage);

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: { coverImage: coverImg.url },
    },
    {
      new: true,
    }
  ).select("-password");

  if (!user) {
    new APIError(500, "Error accured while Updating database");
  }

  return res
    .status(200)
    .json(new APIResponse(200, user, "Cover Image updated Successfully"));
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;
  if (!username) {
    throw new APIError(400, "no username found");
  }

  const channelUser = await User.aggregate([
    {
      $match: {
        // this gives channel document
        username: username?.toLowerCase(),
      },
    },
    {
      // this gives Subscribers of channel
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      // this gives subcriptions of channel
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "subscribedTo",
      },
    },
    {
      $addFields: {
        subscribersCount: {
          $size: "$subscribers",
        },
        channelsSubscribedToCount: {
          $size: "$subscribedTo",
        },
        isSubscribed: {
          $cond: {
            if: { $in: [req.user?._id, "$subscribers.subscriber"] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      $project: {
        username: 1,
        fullName: 1,
        avatar: 1,
        coverImage: 1,
        email: 1,
        subscribersCount: 1,
        channelsSubscribedToCount: 1,
        isSubscribed: 1,
      },
    },
  ]);

  if (!channelUser?.length) {
    throw new APIError(404, "channel does not exists");
  }

  return res
    .status(200)
    .json(new APIResponse(200, channelUser[0], "Channel Fetched Successfully"));
});

// TODO Get Proper WatchHistory
const getNewWatchHistory = asyncHandler(async (req, res) => {
  const userWatchHistory = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user?._id),
      },
    },
    {
      $project: { watchHistory: 1 },
    },
    {
      $unwind: {
        path: "$watchHistory",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $sort: {
        "watchHistory.createdAt": -1,
      },
    },
    {
      $addFields: {
        "watchHistory.watchedDate": {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$watchHistory.createdAt",
          },
        },
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory.video",
        foreignField: "_id",
        as: "watchHistory.video",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    username: 1,
                    fullName: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
    {
      $addFields: {
        "watchHistory.video": {
          $first: "$watchHistory.video",
        },
      },
    },
    {
      $group: {
        _id: "$watchHistory.watchedDate",
        videos: {
          $push: "$watchHistory",
        },
      },
    },
  ]);

  let watchHistory = userWatchHistory;

  return res
    .status(200)
    .json(new APIResponse(200, watchHistory, "History Fetched Successfully"));
});

const getWatchHistory = asyncHandler(async (req, res) => {
  const userWatchHistory = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    username: 1,
                    fullName: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
    {
      $project: {
        watchHistory: 1,
      },
    },
  ]);

  let watchHistory = userWatchHistory[0].watchHistory;

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        watchHistory.reverse(),
        "History Fetched Successfully"
      )
    );
});

const clearWatchHistory = asyncHandler(async (req, res) => {
  const isCleared = await User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(req.user?._id),
    {
      $set: {
        watchHistory: [],
      },
    },
    {
      new: true,
    }
  );
  if (!isCleared) throw new APIError(500, "Failed to clear history");
  return res
    .status(200)
    .json(new APIResponse(200, [], "History Cleared Successfully"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changePassword,
  updateUserProfile,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
  clearWatchHistory,
};
