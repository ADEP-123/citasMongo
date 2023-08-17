import express from 'express';

// import initApiRoutes from './src/routes/routes.js';

const appExpress = express();
appExpress.use(express.json())
appExpress.use('/campus', (req, res, next) => {
    res.json({ Hola: "Holaa" })
});

export default appExpress;