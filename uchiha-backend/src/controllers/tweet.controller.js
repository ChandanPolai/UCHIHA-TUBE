import { Tweet } from "../models/tweet.model.js";
import { Like } from "../models/like.model.js";
import { Subscription } from "../models/subscription.model.js";
import mongoose, { isValidObjectId } from "mongoose";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// TODO: Review and Enhance all controllers

const createTweet = asyncHandler(async (req, res) => {
  const { tweet } = req.body;

  if (!tweet) throw new APIError(400, "Tweet content required");

  const tweetRes = await Tweet.create({ content: tweet, owner: req.user?._id });

  if (!tweetRes) throw new APIError(500, "Error occured while creating tweet");

  let newTweet = {
    ...tweetRes._doc,
    owner: {
      fullName: req.user?.fullName,
      username: req.user?.username,
      avatar: req.user?.avatar,
    },
    totalDisLikes: 0,
    totalLikes: 0,
    isLiked: false,
    isDisLiked: false,
  };

  return res
    .status(200)
    .json(new APIResponse(200, newTweet, "tweet created successfully"));
});

const getUserTweets = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId))
    throw new APIError(400, "Invalid userId: " + userId);

  const allTweets = await Tweet.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
      },
    },
    // sort by latest
    {
      $sort: {
        createdAt: -1,
      },
    },
    // fetch likes of tweet
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "likes",
        pipeline: [
          {
            $match: {
              liked: true,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "dislikes",
        pipeline: [
          {
            $match: {
              liked: false,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    // Reshape Likes and dislikes
    {
      $addFields: {
        likes: {
          $cond: {
            if: {
              $gt: [{ $size: "$likes" }, 0],
            },
            then: { $first: "$likes.owners" },
            else: [],
          },
        },
        dislikes: {
          $cond: {
            if: {
              $gt: [{ $size: "$dislikes" }, 0],
            },
            then: { $first: "$dislikes.owners" },
            else: [],
          },
        },
      },
    },
    // get owner details
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
              avatar: 1,
              fullName: 1,
            },
          },
        ],
      },
    },
    {
      $unwind: "$owner",
    },
    {
      $project: {
        content: 1,
        createdAt: 1,
        updatedAt: 1,
        owner: 1,
        totalLikes: {
          $size: "$likes",
        },
        totalDisLikes: {
          $size: "$dislikes",
        },
        isLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$likes"],
            },
            then: true,
            else: false,
          },
        },
        isDisLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$dislikes"],
            },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, allTweets, "all tweets send successfully"));
});

const getAllTweets = asyncHandler(async (req, res) => {
  const allTweets = await Tweet.aggregate([
    // sort by latest
    {
      $sort: {
        createdAt: -1,
      },
    },
    // fetch likes of tweet
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "likes",
        pipeline: [
          {
            $match: {
              liked: true,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "dislikes",
        pipeline: [
          {
            $match: {
              liked: false,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    // Reshape Likes and dislikes
    {
      $addFields: {
        likes: {
          $cond: {
            if: {
              $gt: [{ $size: "$likes" }, 0],
            },
            then: { $first: "$likes.owners" },
            else: [],
          },
        },
        dislikes: {
          $cond: {
            if: {
              $gt: [{ $size: "$dislikes" }, 0],
            },
            then: { $first: "$dislikes.owners" },
            else: [],
          },
        },
      },
    },
    // get owner details
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
              avatar: 1,
              fullName: 1,
            },
          },
        ],
      },
    },
    {
      $unwind: "$owner",
    },
    {
      $project: {
        content: 1,
        createdAt: 1,
        updatedAt: 1,
        owner: 1,
        isOwner: {
          $cond: {
            if: { $eq: [req.user?._id, "$owner._id"] },
            then: true,
            else: false,
          },
        },
        totalLikes: {
          $size: "$likes",
        },
        totalDisLikes: {
          $size: "$dislikes",
        },
        isLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$likes"],
            },
            then: true,
            else: false,
          },
        },
        isDisLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$dislikes"],
            },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, allTweets, "all tweets send successfully"));
});

const getAllUserFeedTweets = asyncHandler(async (req, res) => {
  const subscriptions = await Subscription.find({ subscriber: req.user?._id });

  const subscribedChannels = subscriptions.map((item) => item.channel);

  const allTweets = await Tweet.aggregate([
    {
      $match: {
        owner: {
          $in: subscribedChannels,
        },
      },
    },
    // sort by latest
    {
      $sort: {
        createdAt: -1,
      },
    },
    // fetch likes of tweet
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "likes",
        pipeline: [
          {
            $match: {
              liked: true,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "tweet",
        as: "dislikes",
        pipeline: [
          {
            $match: {
              liked: false,
            },
          },
          {
            $group: {
              _id: "liked",
              owners: { $push: "$likedBy" },
            },
          },
        ],
      },
    },
    // Reshape Likes and dislikes
    {
      $addFields: {
        likes: {
          $cond: {
            if: {
              $gt: [{ $size: "$likes" }, 0],
            },
            then: { $first: "$likes.owners" },
            else: [],
          },
        },
        dislikes: {
          $cond: {
            if: {
              $gt: [{ $size: "$dislikes" }, 0],
            },
            then: { $first: "$dislikes.owners" },
            else: [],
          },
        },
      },
    },
    // get owner details
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
              avatar: 1,
              fullName: 1,
            },
          },
        ],
      },
    },
    {
      $unwind: "$owner",
    },
    {
      $project: {
        content: 1,
        createdAt: 1,
        updatedAt: 1,
        owner: 1,
        isOwner: {
          $cond: {
            if: { $eq: [req.user?._id, "$owner._id"] },
            then: true,
            else: false,
          },
        },
        totalLikes: {
          $size: "$likes",
        },
        totalDisLikes: {
          $size: "$dislikes",
        },
        isLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$likes"],
            },
            then: true,
            else: false,
          },
        },
        isDisLiked: {
          $cond: {
            if: {
              $in: [req.user?._id, "$dislikes"],
            },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, allTweets, "all tweets send successfully"));
});

const updateTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const { tweet } = req.body;
  if (!isValidObjectId(tweetId)) throw new APIError(400, "Invalid tweetId");
  if (!tweet) throw new APIError(400, "tweet content required");

  const updatedTweet = await Tweet.findByIdAndUpdate(
    tweetId,
    {
      $set: {
        content: tweet,
      },
    },
    {
      new: true,
    }
  );
  return res
    .status(200)
    .json(new APIResponse(200, updatedTweet, "tweet updated successfully"));
});

const deleteTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!isValidObjectId(tweetId)) throw new APIError(400, "Invalid tweetId");

  const findRes = await Tweet.findByIdAndDelete(tweetId);

  if (!findRes) throw new APIError(500, "tweet not found");

  const deleteLikes = await Like.deleteMany({
    tweet: new mongoose.Types.ObjectId(tweetId),
  });

  return res
    .status(200)
    .json(new APIResponse(200, findRes, "tweet deleted successfully"));
});

export {
  createTweet,
  getUserTweets,
  updateTweet,
  deleteTweet,
  getAllTweets,
  getAllUserFeedTweets,
};
