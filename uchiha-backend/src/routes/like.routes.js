import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  toggleCommentLike,
  toggleTweetLike,
  toggleVideoLike,
  toggleLike,
  getLikedVideos,
} from "../controllers/like.controller.js";

const router = Router();

router.use(verifyJWT);

// http://localhost:3000/api/v1/like/...

router.route("/").patch(toggleLike);
router.route("/comment/:commentId").patch(toggleCommentLike);
router.route("/tweet/:tweetId").patch(toggleTweetLike);
router.route("/video/:videoId").patch(toggleVideoLike);
router.route("/videos").get(getLikedVideos);

export default router;
