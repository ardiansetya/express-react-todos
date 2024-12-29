import { deleteTodoData, editTodoData, getTodoByTitle, getTodoDatas, insertTodoData } from "./todo.repository.js";

export const getTodos = async () => {
    const todos = await getTodoDatas();
    return todos;
}



export const createTodo = async (newTodoData, userId) => {
    const todo = await insertTodoData(newTodoData, userId);
    const todoTitle = await getTodoByTitle(newTodoData.title);
    if (todoTitle) {
        throw new Error('Title already exist');
    }
    return todo;
}

export const editTodo = async (id, newTodoData) => {
    const todo = await editTodoData(id, newTodoData);
    return todo;
}

export const deleteTodo = async (id) => {
    const todo = await deleteTodoData(id);
    return todo;
}

