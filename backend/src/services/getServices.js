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

const getPatientsdateByMedicService = async (idMedico) => {
    const cita = new Citas()
    const result = await cita.getPatientsdateByMedic(idMedico);
    return result;
};

const getPatientsdateByPatientService = async (idUsuario) => {
    const cita = new Citas();
    const result = await cita.getPatientsdateByPatient(idUsuario);
    return result
};

const getDatesByDateService = async (fecha) => {
    const cita = new Citas();
    const result = await cita.getDatesbyDate(fecha);
    return result
};

const getAllMedicsAndConsultoriesService = async () => {
    const medico = new Medicos();
    const result = await medico.getAllMedicsAndConsultories();
    return result
};

const getAmountDatesbyDateAndMedicService = async (fecha, idMedico) => {
    const cita = new Citas();
    const result = await cita.getAmountDatesbyDateAndMedic(fecha, idMedico);
    return result
};

const getDateConsultoryService = async (idUsuario) => {
    const cita = new Citas();
    const result = await cita.getDateConsultory(idUsuario);
    return result
};

const getDatesByGenderService = async (genero) => {
    const cita = new Citas();
    const result = await cita.getDatesByGander(genero);
    return result
};

export {
    getAllUsersService,
    getAllDatesService,
    getAllSpecialistService,
    getNextDateService,
    getPatientsdateByMedicService,
    getPatientsdateByPatientService,
    getDatesByDateService,
    getAllMedicsAndConsultoriesService,
    getAmountDatesbyDateAndMedicService,
    getDateConsultoryService,
    getDatesByGenderService
}