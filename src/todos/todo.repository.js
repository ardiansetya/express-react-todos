import { prisma } from '../db/index.js';

export const getTodoDatas = async (userId) => {
    const todos = await prisma.todos.findMany({
        where: {
            userId
        }
    });
    return todos;
}

export const getTodoByTitle = async (title) => {
    const todoTitle = await prisma.todos.findFirst({
        where: {
            title
        }
    })
    return todoTitle
}


export const getTodoByIdDb = async (id, userId) => {
    const todos = await prisma.todos.findUnique({
        where: {
            id,
            userId
        }
    });
    return todos
}

export const insertTodoData = async (newTodoData, userId) => {
    const todo = await prisma.todos.create({
        data: {
            title: newTodoData.title,
            desc: newTodoData.desc,
            isCompelete: newTodoData.isCompelete ?? false,
            userId: newTodoData.userId ?? userId
        }
    });
    return todo;
}

export const editTodoData = async (id, newTodoData, userId) => {

    const todo = await prisma.todos.update({
        where: {

            id,
            userId

        },
        data: {
            title: newTodoData.title,
            desc: newTodoData.desc,
            isCompelete: newTodoData.isCompelete ?? false, // Default false if not provided
        }
    });

    return todo;
};


export const deleteTodoData = async (id) => {
    const todo = await prisma.todos.delete({
        where: {
            id
        }
    });
    return todo;
}