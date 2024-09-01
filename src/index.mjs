import express from "express";
import "dotenv/config";
const app = express();

function myMiddleware(req, res, next) {
    console.log("Middleware function called");

    req.customProperty = "Hello from myMiddleware";

    next();
}

app.get("/", myMiddleware, (req, res) => res.send("Hi" + req.customProperty));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})