import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkUser } from "../middlewares/openRouteAuth.middleware.js";
import {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
  getVideoSavePlaylists,
} from "../controllers/playlist.controller.js";

const router = Router();

// http://localhost:3000/api/v1/playlist/...

router.route("/").post(verifyJWT, createPlaylist);
router.route("/add/:playlistId/:videoId").patch(verifyJWT, addVideoToPlaylist);
router
  .route("/remove/:playlistId/:videoId")
  .patch(verifyJWT, removeVideoFromPlaylist);
router
  .route("/:playlistId")
  .get(checkUser, getPlaylistById)
  .patch(verifyJWT, updatePlaylist)
  .delete(verifyJWT, deletePlaylist);
router.route("/users/:userId").get(checkUser, getUserPlaylists);
router.route("/user/playlists/:videoId").get(verifyJWT, getVideoSavePlaylists);

export default router;
