import { Router } from 'express';
import { getUsersController } from '../controllers/getDataControllers.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/usuarios", getUsersController)

    return router;
}

export default getInitRoute