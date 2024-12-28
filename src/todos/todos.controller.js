import { Router } from "express";
import { createTodo, getTodos } from "./todos.service.js";

const router = Router();

router.get("/todos", async (req, res) => {
    try {
        const todos = await getTodos();
        res.send(todos);
    } catch (error) {
     console.log(error.message);   
    }
});
router.post("/todos", async (req, res) => {
    const newTodoData= req.body
    try {
        const todo = await createTodo(newTodoData);
        res.send(todo);
    } catch (error) {
     console.log(error.message);   
    }
});


export default router