import { getAllDatesService, getAllSpecialistService, getAllUsersService, getNextDateService, getPatientsdateByMedicService, getPatientsdateByPatientService } from "../services/getServices.js";


const getUsersController = async (req, res, next) => {
    try {
        const result = await getAllUsersService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNextDateController = async (req, res, next) => {
    try {
        const { cit_datosUsuario } = req.query
        const result = await getNextDateService(cit_datosUsuario);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPatientsdateByMedicController = async (req, res, next) => {
    try {
        const { cit_medico } = req.query
        const result = await getPatientsdateByMedicService(cit_medico);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDatesController = async (req, res, next) => {
    try {
        const result = await getAllDatesService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getMedicsController = async (req, res, next) => {
    try {
        const { esp_nombre } = req.query
        const result = await getAllSpecialistService(esp_nombre);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPatientsdateByPatientController = async (req, res, next) => {
    try {
        const { cit_datosUsuario } = req.query;
        const result = await getPatientsdateByPatientService(cit_datosUsuario);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




export {
    getUsersController,
    getDatesController,
    getMedicsController,
    getPatientsdateByMedicController,
    getNextDateController,
    getPatientsdateByPatientController
}