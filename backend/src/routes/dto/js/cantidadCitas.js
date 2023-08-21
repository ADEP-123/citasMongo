var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class cantidadCitasDTO {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    Expose({ name: "idMedico" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `El documento de identidad del medico es requerido` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], cantidadCitasDTO.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: "fecha" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^\d{4}-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato de la fecha incorrecto, recuerde que el formato esperado es YYYY-MM-DD HH:MM:SS` };
            }
        }
        else {
            throw { status: 400, message: `La fecha y hora de la cita es requerida` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], cantidadCitasDTO.prototype, "cit_fecha", void 0);
