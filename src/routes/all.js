import { Router } from "express";

import rootRoute from "./root.js";
import combinationsRoute from "./combinations.js";

const router = Router();

router.use(rootRoute);
router.use("/combinations", combinationsRoute);

export default router;
