import { getAllDatesService, getAllSpecialistService, getAllUsersService, getNextDateService } from "../services/getServices.js";


const getUsersController = async (req, res, next) => {
    try {
        const result = await getAllUsersService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDatesController = async (req, res, next) => {
    try {
        const { cit_datosUsuario } = req.query
        let result;
        if (cit_datosUsuario) {
            console.log(cit_datosUsuario);
            result = await getNextDateService(cit_datosUsuario);
        } else {
            result = await getAllDatesService();
        }
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


export {
    getUsersController,
    getDatesController,
    getMedicsController
}