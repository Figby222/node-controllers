import { Router } from "express";
import { getUserById } from "../../controllers/userController.mjs";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("User homepage"));
userRouter.get("/:id", getUserById);

export default userRouter;