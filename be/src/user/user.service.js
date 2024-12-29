import { deleteUserData, editUserData, getUserDatas, insertUserData } from "./user.repository.js";

export const getUsers = async () => {
    const user = await getUserDatas();
    return user;
}

export const createUser = async (newUserData) => {
    const user = await insertUserData(newUserData);
    return user;
}

export const editUser = async (id, newUserData) => {
    const user = await editUserData(id, newUserData);
    return user;
}

export const deleteUser = async (id) => {
    const user = await deleteUserData(id);
    return user;
}

