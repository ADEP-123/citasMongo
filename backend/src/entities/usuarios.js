import { collectionGen, startTransaction } from "../utils/db.js";
import Counters from "./counters.js";
const counter = new Counters()

class Usuarios {
    constructor() { }

    async getAllUsers() {
        let session;
        try {
            session = await startTransaction();
            const productosCollection = await collectionGen("usuario");
            const result = productosCollection.aggregate([
                {
                    $project: {
                        id: "$_id",
                        primerNombre: "$usu_nombre",
                        segundoNombre: "$usu_segdo_nombre",
                        primerApellido: "$usu_primer_apellido_usuar",
                        segundoApellido: "$usu_segdo_apellido_usuar",
                        telefono: "$usu_telefono",
                        direccion: "$usu_direccion",
                        email: "$usu_e_mail",
                        tipoDocumento: "$usu_tipodoc",
                        genero: "$usu_genero",
                        fechaNacimiento: "$usu_fechNac",
                        acudienteId: "$usu_acudiente"
                    }
                },
                {
                    $sort: {
                        primerNombre: 1,
                        segundoNombre: 1,
                        primerApellido: 1,
                        segundoApellido: 1
                    }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

    async postNewPatient(id, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, tipoDocumento, genero, fechaNacimiento, acudienteId) {
        let session;
        try {
            session = await startTransaction();
            const productosCollection = await collectionGen("usuario");
            const result = productosCollection.insertOne(
                {

                    _id: id,
                    usu_nombre: primerNombre,
                    usu_segdo_nombre: segundoNombre,
                    usu_primer_apellido_usuar: primerApellido,
                    usu_segdo_apellido_usuar: segundoApellido,
                    usu_telefono: telefono,
                    usu_direccion: direccion,
                    usu_e_mail: email,
                    usu_tipodoc: tipoDocumento,
                    usu_genero: genero,
                    usu_fechNac: new Date(fechaNacimiento),
                    usu_acudiente: acudienteId

                }
            );
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }

}
export default Usuarios;