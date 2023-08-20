import { Router } from 'express';
import { getUsersController } from '../controllers/getDataControllers.js';
import { contentMiddlewareUsuarios } from '../middleware/contentVerifyMiddleware.js';

const getInitRoute = () => {
    const router = Router()
    router.get("/usuarios", contentMiddlewareUsuarios, getUsersController)

    return router;
}

export default getInitRoute