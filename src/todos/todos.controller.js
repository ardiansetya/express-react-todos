import { Router } from "express";
import { createTodo, deleteTodo, editTodo, getTodos } from "./todos.service.js";
import { authMiddleware } from "../middleware/middleware.js";

const router = Router();

router.get("/todos", authMiddleware, async (req, res) => {
    const {userId} = req.user
    try {
        const todos = await getTodos(userId);
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

router.put("/todos/:id", authMiddleware, async (req, res) => {
    const newTodoData = req.body
    const {id} = req.params
    const userId = req.user.userId
    try {
        const todo = await editTodo(parseInt(id), newTodoData, userId);
        res.status(200).json({todo, message: "Todo updated successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

router.delete("/todos/:id", authMiddleware, async (req, res) => {
    const {id} = req.params
    try {
        const todo = await deleteTodo(parseInt(id));
        res.status(200).json({todo, message: "Todo deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
});


export default router