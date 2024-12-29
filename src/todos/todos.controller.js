import { Router } from "express";
import { createTodo, getTodos } from "./todos.service.js";
import { authMiddleware } from "../middleware/middleware.js";

const router = Router();

router.get("/todos", authMiddleware, async (req, res) => {
    try {
        const todos = await getTodos();
        res.json(todos);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })

    }
});
router.post("/todos", authMiddleware, async (req, res) => {
    const newTodoData = req.body
    const userId = req.user.userId


    try {
        const todo = await createTodo(newTodoData, userId);
        res.json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
});


export default router