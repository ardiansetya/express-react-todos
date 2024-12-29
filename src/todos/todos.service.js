import { deleteTodoData, editTodoData, getTodoByIdDb, getTodoByTitle, getTodoDatas, insertTodoData } from "./todo.repository.js";

export const getTodos = async (userId) => {
    const todos = await getTodoDatas(userId);
    return todos;
}

export const getTodoById = async (id, userId) => {
    const todo = await getTodoByIdDb(id, userId);
    if (!todo) {
        throw new Error('Todo not found');
    }
    return todo;
}


export const createTodo = async (newTodoData, userId) => {
    const todo = await insertTodoData(newTodoData, userId);
    const todoTitle = await getTodoByTitle(newTodoData.title);
    if (todoTitle) {
        throw new Error('Title already exist');
    }
    return todo;
}

export const editTodo = async (id, newTodoData, userId) => {
    // Validasi untuk memastikan data yang diperlukan ada
    if (!newTodoData.title || !newTodoData.desc || newTodoData.isCompelete === undefined) {
        throw new Error('Missing required fields');
    }

    // Update todo
    const todo = await editTodoData(id, newTodoData, userId);

    if (!todo) {
        throw new Error('Todo not found');
    }

    return todo;
}

export const deleteTodo = async (id) => {
    const todo = await deleteTodoData(id);
    return todo;
}

