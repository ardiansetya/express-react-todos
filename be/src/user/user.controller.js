import { Router } from "express";
import { createUser, getUsers } from "./user.service.js";

const router = Router();

router.get("/user", async (req, res) => {
    try {
        const user = await getUsers();
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)

    }
});
router.post("/user", async (req, res) => {
    const newUserData = req.body
    try {
        const user = await createUser(newUserData);
        res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)

    }
});

export default router

