import {Router} from "express";
import catalogRouter from "./catalogRouter";

const router = Router();

router.use('/catalog', catalogRouter);

export default router;
