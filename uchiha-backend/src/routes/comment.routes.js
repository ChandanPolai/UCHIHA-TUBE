import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkUser } from "../middlewares/openRouteAuth.middleware.js";
import {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = Router();

// http://localhost:3000/api/v1/comment/...

router.route("/get/:videoId").get(checkUser, getVideoComments);
router.route("/add/:videoId").post(verifyJWT, addComment);
router
  .route("/:commentId")
  .patch(verifyJWT, updateComment)
  .delete(verifyJWT, deleteComment);

export default router;
