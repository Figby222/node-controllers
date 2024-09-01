const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
    
        const user = await someDBQueryToGetUser(userId);
    
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
    
        res.send(`User found: ${user.name}`);

    } catch (err) {
        console.error("Error retrieving user: ", err);
        res.status(500).send("Internal server Error");
    }
}

async function someDBQueryToGetUser(userId) {
    return { name: "Figby" };
}

export { getUserById };