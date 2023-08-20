import { Router } from "express";
// import getInitRoute from "./getData.js";
// import postInitRoute from "./postData.js";
// import putInitRoute from "./putData.js";
// import { middlewareRateLimit } from "../middleware/limit.js";
import { appToken } from "../services/tokenGenerator.js";
// import { authorizationMiddleware } from "../middleware/autohorizationMiddleware.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/login", appToken)
    // router.use("/get", getInitRoute())
    // router.use("/post", postInitRoute())
    // router.use("/put", putInitRoute())
    return router
}

export default initApiRoutes