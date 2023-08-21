import { getAllDatesService, getAllMedicsAndConsultoriesService, getAllSpecialistService, getAllUsersService, getAmountDatesbyDateAndMedicService, getDateConsultoryService, getDatesByDateService, getDatesByGenderService, getNextDateService, getPatientsdateByMedicService, getPatientsdateByPatientService, getSupendedDatesByMonthService } from "../services/getServices.js";


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
};

const getDatesByDateController = async (req, res, next) => {
    try {
        const { cit_fecha } = req.query;
        const result = await getDatesByDateService(cit_fecha);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllMedicsAndConsultoriesController = async (req, res, next) => {
    try {
        const result = await getAllMedicsAndConsultoriesService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAmountDatesbyDateAndMedicController = async (req, res, next) => {
    try {
        const { cit_fecha, cit_medico } = req.query;
        const result = await getAmountDatesbyDateAndMedicService(cit_fecha, cit_medico);
        res.status(200).json({ message: `se han encontrado ${result.length} citas con el medico de id ${cit_medico} en la fecha ${cit_fecha}`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDateConsultoryController = async (req, res, next) => {
    try {
        const { cit_datosUsuario } = req.query;
        const result = await getDateConsultoryService(cit_datosUsuario);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDatesByGenderController = async (req, res, next) => {
    try {
        const { usu_genero } = req.query;
        const result = await getDatesByGenderService(usu_genero);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSuspendedDatesByMonthController = async (req, res, next) => {
    try {
        const { mes } = req.query;
        const result = await getSupendedDatesByMonthService(Number(mes));
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




export {
    getUsersController,
    getDatesController,
    getMedicsController,
    getPatientsdateByMedicController,
    getNextDateController,
    getPatientsdateByPatientController,
    getDatesByDateController,
    getAllMedicsAndConsultoriesController,
    getAmountDatesbyDateAndMedicController,
    getDateConsultoryController,
    getDatesByGenderController,
    getSuspendedDatesByMonthController
}