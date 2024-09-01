import express from "express";
import "dotenv/config";
import userRouter from "./routes/userRouter.mjs";
const app = express();

app.use("/user", userRouter);

function myMiddleware(req, res, next) {
    console.log("Middleware function called");

    req.customProperty = "Hello from myMiddleware";

    next();
}

app.use(myMiddleware);

app.get("/", (req, res) => res.send("Hi" + req.customProperty));


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})