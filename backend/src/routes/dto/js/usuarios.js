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
export class Usuarios {
    constructor(data) {
        Object.assign(this, data);
        this._id = "FAKE";
        this.usu_nombre = "FAKE";
        this.usu_segdo_nombre = "FAKE";
        this.usu_primer_apellido_usuar = "FAKE";
        this.usu_segdo_apellido_usuar = "FAKE";
        this.usu_telefono = "3333333333";
        this.usu_direccion = "Callse fake";
        this.usu_e_mail = "email@fake.com";
        this.usu_tipodoc = 1;
        this.usu_genero = 1;
        this.usu_fechNac = "1111-11-11";
        this.usu_acudiente = "111111111";
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
], Usuarios.prototype, "_id", void 0);
__decorate([
    Expose({ name: "primerNombre" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El primer nombre del usuario es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: "segundoNombre" }),
    Transform(({ value, key }) => { }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: "primerApellido" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El primer apellido del usuario es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: "segundoApellido" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El segundo apellido del usuario es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: "telefono" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del numero telefonico incorrecto, inserte el numero de telefono de 10 digitos sin codigo de zona` };
            }
        }
        else {
            throw { status: 400, message: `El telefono del usuario es requerido` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: "direccion" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `La direccion es requerida` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: "email" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del correo electronico incorrecto` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_e_mail", void 0);
__decorate([
    Expose({ name: "tipoDocumento" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del tipo de documento es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: "genero" }),
    Transform(({ value, key }) => { if (value)
        return value;
    else
        throw { status: 400, message: `El id del genero es requerido` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: "fechaNacimiento" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^\d{4}-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato de la fecha de nacimiento incorrecta, recuerde que el formato esperado es YYYY-MM-DD` };
            }
        }
        else {
            throw { status: 400, message: `La fecha de nacimiento es requerida` };
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_fechNac", void 0);
__decorate([
    Expose({ name: "acudienteId" }),
    Transform(({ value, key }) => {
        if (value) {
            if (/^[0-9]{10}$/.test(value)) {
                return value;
            }
            else {
                throw { status: 400, message: `Formato del documento de identidad del acudiente incorrecto` };
            }
        }
        else {
            return value;
        }
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Usuarios.prototype, "usu_acudiente", void 0);
