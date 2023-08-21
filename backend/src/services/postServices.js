import Usuarios from "../entities/usuarios.js";

const postPatientService = async (id, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, tipoDocumento, genero, fechaNacimiento, acudienteId) => {
    const usuario = new Usuarios()
    const result = await usuario.postNewPatient(id, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, tipoDocumento, genero, fechaNacimiento, acudienteId);
    return result;
};

export {
    postPatientService
}