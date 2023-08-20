import { Router } from 'express';
import { getDatesController, getUsersController } from '../controllers/getDataControllers.js';
import { contentMiddlewareCitas, contentMiddlewareUsuarios } from '../middleware/contentVerifyMiddleware.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/usuarios", contentMiddlewareUsuarios, getUsersController);
    router.get("/citas", contentMiddlewareCitas, getDatesController);

    return router;
}

export default getInitRoute