import CustomNotFoundError from "../CustomNotFoundError.mjs";

import asyncHandler from "express-async-handler";

const getUserById = asyncHandler(async (req, res) => {
        const userId = req.params.id;
    
        const user = await someDBQueryToGetUser(userId);
    
        if (!user) {
            throw new CustomNotFoundError("User not found");
        }
    
        res.send(`User found: ${user.name}`);
})

async function someDBQueryToGetUser(userId) {
    return { name: "Figby" };
}

export { getUserById };