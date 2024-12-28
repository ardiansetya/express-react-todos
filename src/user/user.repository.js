import {prisma} from '../db/index.js';

export const getUserDatas = async () => {
    const user = await prisma.user.findMany();
    return user;
}

export const insertUserData = async (newUserData) => {
    const user = await prisma.user.create({
        data:{
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password
        }
    });
    return user;
}

export const editUserData = async (id, newUserData) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password
        }
    });
    return user;
}

export const deleteUserData = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id
        }
    });
    return user;
}