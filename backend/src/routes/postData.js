import { Router } from 'express';
import { contentMiddlewareUsuarios } from '../middleware/contentVerifyMiddleware.js';
import { postPatientController } from '../controllers/postDataController.js';
import { middlewareNewPatientDTO } from '../middleware/middlewaresDTO.js';

const postInitRoute = () => {
    const router = Router()
    router.post("/usuario", contentMiddlewareUsuarios, middlewareNewPatientDTO, postPatientController);

    return router;
}

export default postInitRoute