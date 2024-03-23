import { Router } from "express";
import wrapAsync from "../utils/wrapAsync.js";
import {Create, show,deleteController,updatePriceAndVolume,EditShowController} from "../controller/priceAndvolume.js"



const router  = Router();

router.route("/create").post(wrapAsync(Create));

router.route("/home").get(wrapAsync(show));
router.route("/home/:id").delete(wrapAsync(deleteController));
router.route("/home/:id").put(wrapAsync(updatePriceAndVolume));
router.route("/home/:id").get(wrapAsync(EditShowController));



export default router;