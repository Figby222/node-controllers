import { Router } from "express";
import { getUserById } from "../controllers/userController.mjs";

const userRouter = Router();

const middleware1 = (req, res, next) => {
    console.log("Middleware 1");
    next();
};

const middleware2 = (req, res, next) => {
    console.log("Middleware 2");
    next();
};

const middleware3 = (req, res, next) => {
    console.log("Middleware 3");
    next();
};

const middleware4 = (req, res, next) => {
    console.log("Middleware 4");
    next();
};

userRouter.use(middleware1);
userRouter.use(middleware2);
userRouter.use(middleware3);
userRouter.use(middleware4);

userRouter.get("/", (req, res) => res.send("User homepage"));
userRouter.get("/:id", getUserById);

export default userRouter;