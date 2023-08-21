import { Router } from 'express';
import { getDatesController, getMedicsController, getNextDateController, getPatientsdateByMedicController, getPatientsdateByPatientController, getUsersController } from '../controllers/getDataControllers.js';
import { contentMiddlewareCitas, contentMiddlewareMedicos, contentMiddlewareUsuarios } from '../middleware/contentVerifyMiddleware.js';
import { middlewareCitaPacienteDTO, middlewareMedicoSepecialidadDTO, middlewarePacientesMedicoDTO, middlewareProximaCitaDTO } from '../middleware/middlewaresDTO.js';


const getInitRoute = () => {
    const router = Router()
    router.get("/usuarios", contentMiddlewareUsuarios, getUsersController);
    router.get("/citas", contentMiddlewareCitas, getDatesController);
    router.get("/citaSiguente", contentMiddlewareCitas, middlewareProximaCitaDTO, getNextDateController);
    router.get("/getPatients", contentMiddlewareCitas, middlewarePacientesMedicoDTO, getPatientsdateByMedicController);
    router.get("/medicos", contentMiddlewareMedicos, middlewareMedicoSepecialidadDTO, getMedicsController);
    router.get("/citasPorPaciente", contentMiddlewareCitas, middlewareCitaPacienteDTO, getPatientsdateByPatientController);

    return router;
}

export default getInitRoute