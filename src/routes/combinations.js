import { Router } from "express";
import combinationsController from "../controllers/combinationsController.js";

const router = Router();

router.post("/", combinationsController.generateCombinations);

export default router;
