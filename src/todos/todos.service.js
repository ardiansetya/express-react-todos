import { deleteTodoData, editTodoData, getTodoDatas, insertTodoData } from "./todo.repository.js";

export const getTodos = async () => {
    const todos = await getTodoDatas();
    return todos;
}

export const createTodo = async (newTodoData) => {
    const todo = await insertTodoData(newTodoData);
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

