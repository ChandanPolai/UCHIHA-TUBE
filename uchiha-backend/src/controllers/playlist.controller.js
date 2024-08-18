import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.model.js";
import { APIResponse } from "../utils/APIResponse.js";
import { APIError } from "../utils/APIError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// TODO: Review and Enhance all controllers

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name) throw new APIError(400, "Name required");

  const playlist = await Playlist.create({
    name,
    description: description || "",
    owner: req.user?._id,
  });

  if (!playlist) throw new APIError(500, "Error while creating Playlist");

  return res
    .status(200)
    .json(new APIResponse(200, playlist, "Playlist Created Successfully"));
});

const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId))
    throw new APIError(400, "Valid userId required");

  // THINKME : playlist thumbnail

  const playlists = await Playlist.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "owner",
        pipeline: [
          {
            $project: {
              fullName: 1,
              avatar: 1,
              username: 1,
              views: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "videos",
        foreignField: "_id",
        as: "videos",
        pipeline: [
          {
            $project: {
              thumbnail: 1,
              views: 1,
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
        name: 1,
        description: 1,
        owner: 1,
        thumbnail: 1,
        videosCount: 1,
        createdAt: 1,
        updatedAt: 1,
        thumbnail: {
          $first: "$videos.thumbnail",
        },
        videosCount: {
          $size: "$videos",
        },
        totalViews: {
          $sum: "$videos.views",
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, playlists, "Playlist sent successfully"));
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  if (!isValidObjectId(playlistId)) {
    throw new APIError(400, "plese give valid playlist id");
  }
  const playlists = await Playlist.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(playlistId),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "videos",
        foreignField: "_id",
        as: "videos",
        pipeline: [
          {
            $match: { isPublished: true },
          },
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
    {
      $project: {
        name: 1,
        description: 1,
        videos: 1,
        owner: 1,
        thumbnail: 1,
        videosCount: 1,
        createdAt: 1,
        updatedAt: 1,
        thumbnail: {
          $first: "$videos.thumbnail",
        },
        videosCount: {
          $size: "$videos",
        },
        totalViews: {
          $sum: "$videos.views",
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, playlists[0], "Playlist sent successfully"));
});

const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new APIError(400, "Please give valid id");
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      $addToSet: {
        videos: videoId,
      },
    },
    {
      new: true,
    }
  );

  if (!playlist)
    throw new APIError(500, "Error while adding video to playlist");

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { isAdded: true },
        "Video added to playlist successfully"
      )
    );
});

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;
  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new APIError(400, "plaese give valid video or playlist id");
  }

  const playlist = await Playlist.findByIdAndUpdate(
    playlistId,
    {
      $pull: {
        videos: videoId,
      },
    },
    {
      new: true,
    }
  );

  if (!playlist)
    throw new APIError(500, "Error while removing video from playlist");

  return res
    .status(200)
    .json(
      new APIResponse(
        200,
        { isSuccess: true },
        "Video removed from playlist successfully"
      )
    );
});

const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  if (!isValidObjectId(playlistId)) {
    throw new APIError(400, "Invalid PlaylistId");
  }
  const playlist = await Playlist.findByIdAndDelete(playlistId);

  if (!playlist) throw new APIError(500, "Error while deleting Playlist");

  return res
    .status(200)
    .json(
      new APIResponse(200, { isDeleted: true }, "Playlist deleted successfully")
    );
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;

  if (!isValidObjectId(playlistId) || (!name && !description))
    throw new APIError(400, "All fields required");

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) throw new APIError(400, "No Playlist Found");

  playlist.name = name.trim();
  playlist.description = description.trim();

  // if (name) playlist.name = name;
  // if (description) playlist.description = description;

  const updatedPlaylist = await playlist.save();

  if (!updatedPlaylist)
    throw new APIError(500, "Error while updating playlist");

  return res
    .status(200)
    .json(
      new APIResponse(200, updatedPlaylist, "Playlist Updated successfully")
    );
});

const getVideoSavePlaylists = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId))
    throw new APIError(400, "Valid videoId required");

  const playlists = await Playlist.aggregate([
    {
      $match: {
        owner: new mongoose.Types.ObjectId(req.user?._id),
      },
    },
    {
      $project: {
        name: 1,
        isVideoPresent: {
          $cond: {
            if: { $in: [new mongoose.Types.ObjectId(videoId), "$videos"] },
            then: true,
            else: false,
          },
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(new APIResponse(200, playlists, "Playlists sent successfully"));
});

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
  getVideoSavePlaylists,
};
