import mongoose, { isValidObjectId } from "mongoose";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const getAboutChannel = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId)) throw new APIError(400, "Invalid userId");

  const aboutChannel = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(userId),
      },
    },
    // fetch total videos and views
    {
      $lookup: {
        from: "videos",
        localField: "_id",
        foreignField: "owner",
        as: "videos",
        pipeline: [
          // THINKME: what to do
          {
            $match: {
              isPublished: true,
            },
          },
          {
            $group: {
              _id: "owner",
              totalVideos: { $count: {} },
              totalViews: { $sum: "$views" },
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "tweets",
        localField: "_id",
        foreignField: "owner",
        as: "tweets",
        pipeline: [
          {
            $group: {
              _id: "owner",
              totalTweets: { $count: {} },
            },
          },
        ],
      },
    },
    {
      $project: {
        username: 1,
        fullName: 1,
        email: 1,
        totalVideos: {
          $cond: {
            if: { $gt: [{ $size: "$videos" }, 0] },
            then: { $first: "$videos.totalVideos" },
            else: 0,
          },
        },
        totalViews: {
          $cond: {
            if: { $gt: [{ $size: "$videos" }, 0] },
            then: { $first: "$videos.totalViews" },
            else: 0,
          },
        },
        totalTweets: {
          $cond: {
            if: { $gt: [{ $size: "$tweets" }, 0] },
            then: { $first: "$tweets.totalTweets" },
            else: 0,
          },
        },
        links: 1,
        createdAt: 1,
        description: 1,
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new APIResponse(200, aboutChannel[0], "channel details sent successfully")
    );
});

export const addChannelDescription = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const description = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        description: content || "",
      },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .json(new APIResponse(200, description, "Description added successfully"));
});

export const addLink = asyncHandler(async (req, res) => {
  const { name, url } = req.body;

  if (!name || !url) throw new APIError(400, "all fields required");

  const links = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $push: {
        links: {
          name,
          url,
        },
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new APIResponse(200, links, "links added successfully"));
});

export const removeLink = asyncHandler(async (req, res) => {
  const { linkId } = req.params;

  if (!isValidObjectId(linkId)) throw new APIError(400, "Invalid linkId");

  const link = await User.findByIdAndUpdate(
    { _id: req.user?._id },
    { $pull: { links: { _id: linkId } } }
  );

  if (!link.links.length > 0) throw new APIError(400, "link not found");

  return res
    .status(200)
    .json(new APIResponse(200, [], "links removed successfully"));
});

export const updateLink = asyncHandler(async (req, res) => {
  const { name, url } = req.body;
  const { linkId } = req.params;

  if ((!name && !url) || !isValidObjectId(linkId))
    throw new APIError(400, "one field required");

  const result = await User.updateOne(
    { _id: req.user?._id },
    { $set: { "links.$[elem].name": name, "links.$[elem].url": url } },
    { arrayFilters: [{ "elem._id": linkId }] }
  );

  if (!result.modifiedCount > 0) throw new APIError(400, "link not found");

  return res
    .status(200)
    .json(new APIResponse(200, result, "links updated successfully"));
});
