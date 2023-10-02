import { addUser, getUsers, setUser, updateUser, getUser } from "../dataAcess/Api"


const addDataAction = async () => {
    const response = await addUser();

    return response.id;
}

const setDataAction = async () => {
    const response = await setUser();

    return response;
}

const updateDataAction = async () => {
    const response = await updateUser();

    return response;
}

const getDataActions = async () => {
    const response = await getUsers();

    const results = []

    response.forEach(doc => {
        results.push(doc.data())
    });

    return results;
}
const getDataAction = async () => {
    const response = await getUser();

    return response.data();
}

export {addDataAction, setDataAction, updateDataAction, getDataActions, getDataAction}