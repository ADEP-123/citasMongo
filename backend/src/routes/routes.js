import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import { middlewareRateLimit } from "../middleware/limit.js";
import { appToken } from "../services/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", middlewareRateLimit, appToken)
    router.use("/get", middlewareRateLimit, authorizationMiddleware, getInitRoute())
    router.use("/post", middlewareRateLimit, authorizationMiddleware, postInitRoute())
    return router
}

export default initApiRoutes