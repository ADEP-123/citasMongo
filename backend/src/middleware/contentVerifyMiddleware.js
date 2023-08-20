import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { Cita } from '../routes/dto/js/citas.js';
import { Medicos } from '../routes/dto/js/medicos.js';
import { Usuarios } from '../routes/dto/js/usuarios.js';

const contentMiddlewareCitas = (req, res, next) => {
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(Cita, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareMedicos = (req, res, next) => {
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(Medicos, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};

const contentMiddlewareUsuarios = (req, res, next) => {
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    // console.log("payload: ", payload);
    let Clone = JSON.stringify(classToPlain(plainToClass(Usuarios, {}, { ignoreDecorators: true })));
    // console.log("Clone: ", Clone);
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next();
};



export {
    contentMiddlewareCitas,
    contentMiddlewareMedicos,
    contentMiddlewareUsuarios
}