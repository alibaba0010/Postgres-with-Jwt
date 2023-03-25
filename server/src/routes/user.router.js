import { Router } from "express";
import { addNewUser } from "../controllers/user.controller.js";
const userRouter = Router();
userRouter.post("/", addNewUser);
export default userRouter;
