import {Router} from "express";
import createUser from "../controllers/createUser.controller";
import login      from "../controllers/userLogin.controller";
import allUsers   from "../controllers/allUsers.controller";
import userById   from "../controllers/userById.controller";
import logpUpdateById from "../controllers/logUpdateById.controller";
import deleteLogById  from "../controllers/deleteLogById.controller";
import authmiddleware from "../middlewares/auth.middlewares";
import idcheckmiddleware from "../middlewares/idCheck.middleware";

const router=Router();

router.post('/sign-in',createUser);

router.post('/login',login);

router.get('/',allUsers);

router.get('/:id',userById);

router.put('/logs/:id',authmiddleware,idcheckmiddleware,logpUpdateById);

router.delete('/logs/:id',authmiddleware,idcheckmiddleware,deleteLogById);

export default router;

