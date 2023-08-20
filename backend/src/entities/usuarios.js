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

}
export default Usuarios;