import { getAllUsersService } from "../services/getServices.js";


const getUsersController = async (req, res, next) => {
    try {
        const result = await getAllUsersService();
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    getUsersController
}