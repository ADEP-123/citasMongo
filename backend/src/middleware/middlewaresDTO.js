import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { medicoEspecialidadDTO } from '../routes/dto/js/medicoEspecialidad.js';


const middlewareMedicoSepecialidadDTO = ((req, res, next) => {
    try {
        let data = plainToClass(medicoEspecialidadDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});


export {
    middlewareMedicoSepecialidadDTO
}