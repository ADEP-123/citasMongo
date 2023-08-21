import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { medicoEspecialidadDTO } from '../routes/dto/js/medicoEspecialidad.js';
import { proximaCitaDTO } from '../routes/dto/js/proximaCita.js';
import { pacientesMedicoDTO } from '../routes/dto/js/pacientesMedico.js';
import { citaPacienteDTO } from '../routes/dto/js/citaPaciente.js';
import { citaFechaDTO } from '../routes/dto/js/citaFecha.js';


const middlewareMedicoSepecialidadDTO = ((req, res, next) => {
    try {
        let data = plainToClass(medicoEspecialidadDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareProximaCitaDTO = ((req, res, next) => {
    try {
        let data = plainToClass(proximaCitaDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewarePacientesMedicoDTO = ((req, res, next) => {
    try {
        let data = plainToClass(pacientesMedicoDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareCitaPacienteDTO = ((req, res, next) => {
    try {
        let data = plainToClass(citaPacienteDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareCitasFechaDTO = ((req, res, next) => {
    try {
        let data = plainToClass(citaFechaDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});


export {
    middlewareMedicoSepecialidadDTO,
    middlewareProximaCitaDTO,
    middlewarePacientesMedicoDTO,
    middlewareCitaPacienteDTO,
    middlewareCitasFechaDTO
}