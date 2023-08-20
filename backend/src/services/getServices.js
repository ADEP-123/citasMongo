import Citas from "../entities/citas.js";
import Usuarios from "../entities/usuarios.js";

const getAllUsersService = async () => {
    const usuario = new Usuarios()
    const result = await usuario.getAllUsers();
    return result;
};

const getAllDatesService = async () => {
    const cita = new Citas()
    const result = await cita.getAllDates();
    return result;
};

export {
    getAllUsersService,
    getAllDatesService
}