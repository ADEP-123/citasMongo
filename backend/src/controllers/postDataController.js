import { getAcudienteByIdService } from "../services/getServices.js";
import { postPatientService } from "../services/postServices.js";

const postPatientController = async (req, res, next) => {
    try {
        const { _id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_tipodoc, usu_genero, usu_fechNac, usu_acudiente } = req.body
        const fechaNacimiento = new Date(usu_fechNac)
        const edad = Math.floor((new Date() - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365.25));
        if (edad < 18) {
            const existenciaAcudiente = await getAcudienteByIdService(usu_acudiente);
            if (existenciaAcudiente == 1) {
                const result = await postPatientService(_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_tipodoc, usu_genero, usu_fechNac, usu_acudiente);
                res.status(200).json({ message: `Paciente ingresado con exito`, result })
            } else {
                res.status(500).json({ message: `El usuario es menor de edad y el acudiente aun no esta registrado, primero registre el acudiente` })
            }
        } else {
            const result = await postPatientService(_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_e_mail, usu_tipodoc, usu_genero, usu_fechNac, usu_acudiente);
            res.status(200).json({ message: `Paciente ingresado con exito`, result })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export {
    postPatientController
}