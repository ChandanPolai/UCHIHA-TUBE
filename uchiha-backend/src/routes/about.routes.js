import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkUser } from "../middlewares/openRouteAuth.middleware.js";
import {
  getAboutChannel,
  addChannelDescription,
  addLink,
  removeLink,
  updateLink,
} from "../controllers/about.controller.js";

const router = Router();

// http://localhost:3000/api/v1/about/user/...

router.route("/:userId").get(getAboutChannel);
router.route("/description").patch(verifyJWT, addChannelDescription);
router.route("/link/add").post(verifyJWT, addLink);

router.route("/link/:linkId").patch(verifyJWT, updateLink);
router.route("/link/:linkId").delete(verifyJWT, removeLink);

export default router;
