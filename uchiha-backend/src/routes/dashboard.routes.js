import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getChannelStats,
  getChannelVideos,
} from "../controllers/dashboard.controller.js";

const router = Router();
router.use(verifyJWT);

// http://localhost:3000/api/v1/dashboard/...

router.route("/states").get(getChannelStats);
router.route("/videos").get(getChannelVideos);

export default router;