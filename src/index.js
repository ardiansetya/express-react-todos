import express from "express";
import { configDotenv } from "dotenv";
import todoRouter from "./todos/todos.controller.js"; // Router untuk todos
import userRouter from "./user/user.controller.js"; // Router untuk user

configDotenv();
const port = process.env.PORT || 3000; // Gunakan default jika PORT tidak diatur

const app = express();
app.use(express.json());

// Endpoint root
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Gunakan router untuk todos
app.use('/api', todoRouter);

// Gunakan router untuk user
app.use('/api', userRouter);

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
