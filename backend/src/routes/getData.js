import { Router } from 'express';
import { getAllMedicsAndConsultoriesController, getAmountDatesbyDateAndMedicController, getDateConsultoryController, getDatesByDateController, getDatesController, getMedicsController, getNextDateController, getPatientsdateByMedicController, getPatientsdateByPatientController, getUsersController } from '../controllers/getDataControllers.js';
import { contentMiddlewareCitas, contentMiddlewareMedicos, contentMiddlewareUsuarios } from '../middleware/contentVerifyMiddleware.js';
import { middlewareCantidadCitasDTO, middlewareCitaPacienteDTO, middlewareCitasFechaDTO, middlewareConsultorioPacienteDTO, middlewareMedicoSepecialidadDTO, middlewarePacientesMedicoDTO, middlewareProximaCitaDTO } from '../middleware/middlewaresDTO.js';


const getInitRoute = () => {
    const router = Router()
    router.get("/usuarios", contentMiddlewareUsuarios, getUsersController);
    router.get("/citas", contentMiddlewareCitas, getDatesController);
    router.get("/citaSiguente", contentMiddlewareCitas, middlewareProximaCitaDTO, getNextDateController);
    router.get("/getPatients", contentMiddlewareCitas, middlewarePacientesMedicoDTO, getPatientsdateByMedicController);
    router.get("/medicos", contentMiddlewareMedicos, middlewareMedicoSepecialidadDTO, getMedicsController);
    router.get("/citasPorPaciente", contentMiddlewareCitas, middlewareCitaPacienteDTO, getPatientsdateByPatientController);
    router.get("/citasPorFecha", contentMiddlewareCitas, middlewareCitasFechaDTO, getDatesByDateController);
    router.get("/medicosConsultorios", contentMiddlewareMedicos, getAllMedicsAndConsultoriesController);
    router.get("/cantidadCitas", contentMiddlewareCitas, middlewareCantidadCitasDTO, getAmountDatesbyDateAndMedicController);
    router.get("/consultoriosUsuario", middlewareConsultorioPacienteDTO, getDateConsultoryController);

    return router;
}

export default getInitRoute