import Usuarios from "../entities/usuarios.js";

const getAllUsersService = async () => {
    const usuario = new Usuarios()
    const result = await usuario.getAllUsers();
    return result;
};

export {
    getAllUsersService
}