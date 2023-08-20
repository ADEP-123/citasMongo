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
export class Medicos {
    constructor(data) {
        Object.assign(this, data);
        this._id = "1111111111";
        this.med_nombreCompleto = "FAKE";
        this.med_consultorio = 1;
        this.med_especialidad = 1;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Id incorrecto, recuerde que debe ser el documento de identidad y tener 10 digitos` };
            }
        }
        else {
            throw { status: 400, message: `El id del responsable es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Medicos.prototype, "_id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El nombre del medico es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Medicos.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: "consultorio" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del consultorio es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Medicos.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: "especialidad" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id de la especialidad esd requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Medicos.prototype, "med_especialidad", void 0);
