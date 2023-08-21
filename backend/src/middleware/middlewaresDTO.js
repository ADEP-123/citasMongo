import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { medicoEspecialidadDTO } from '../routes/dto/js/medicoEspecialidad.js';
import { proximaCitaDTO } from '../routes/dto/js/proximaCita.js';
import { pacientesMedicoDTO } from '../routes/dto/js/pacientesMedico.js';
import { citaPacienteDTO } from '../routes/dto/js/citaPaciente.js';
import { citaFechaDTO } from '../routes/dto/js/citaFecha.js';
import { cantidadCitasDTO } from '../routes/dto/js/cantidadCitas.js';
import { consultorioPacienteDTO } from '../routes/dto/js/consultorioPaciente.js';
import { citasAtendidasGeneroDTO } from '../routes/dto/js/citasAtendidasGenero.js';
import { Usuarios } from '../routes/dto/js/usuarios.js';


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

const middlewareCantidadCitasDTO = ((req, res, next) => {
    try {
        let data = plainToClass(cantidadCitasDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareConsultorioPacienteDTO = ((req, res, next) => {
    try {
        let data = plainToClass(consultorioPacienteDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareCitasAtendidasGeneroDTO = ((req, res, next) => {
    try {
        let data = plainToClass(citasAtendidasGeneroDTO, req.query, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
});

const middlewareNewPatientDTO = ((req, res, next) => {
    try {
        let data = plainToClass(Usuarios, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
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
    middlewareCitasFechaDTO,
    middlewareCantidadCitasDTO,
    middlewareConsultorioPacienteDTO,
    middlewareCitasAtendidasGeneroDTO,
    middlewareNewPatientDTO
}