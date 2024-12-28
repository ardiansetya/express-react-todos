import {prisma} from '../db/index.js';

export const getTodoDatas = async () => {
    const todos = await prisma.todos.findMany();
    return todos;
}

export const insertTodoData = async (newTodoData) => {
    const todo = await prisma.todos.create({
        data:{
            title: newTodoData.title,
            desc: newTodoData.desc
        }
    });
    return todo;
}

export const editTodoData = async (id, newTodoData) => {
    const todo = await prisma.todos.update({
        where: {
            id
        },
        data: {
            title: newTodoData.title,
            desc: newTodoData.desc
        }
    });
    return todo;
}

export const deleteTodoData = async (id) => {
    const todo = await prisma.todos.delete({
        where: {
            id
        }
    });
    return todo;
}