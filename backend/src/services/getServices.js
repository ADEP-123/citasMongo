import Citas from "../entities/citas.js";
import Medicos from "../entities/medicos.js";
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

const getAllSpecialistService = async (especialidad) => {
    const medico = new Medicos()
    const result = await medico.getAllSpecialist(especialidad);
    return result;
};

const getNextDateService = async (idUsuario) => {
    const cita = new Citas()
    const result = await cita.getNextDate(idUsuario);
    return result;
};

export {
    getAllUsersService,
    getAllDatesService,
    getAllSpecialistService,
    getNextDateService
}