import {Router} from "express"
import authmiddleware from "../middlewares/auth.middlewares";
import createLog from "../controllers/createLog.controller";
import createTag from "../controllers/createTag.controller";
import addTagtoLog from "../controllers/addTagtoLog.controller";

const router=Router();

router.post('/create-log',authmiddleware,createLog);

router.post('/create-tag',createTag);

router.post('/logs/:logId/tags/:tagId',addTagtoLog);

export default router;