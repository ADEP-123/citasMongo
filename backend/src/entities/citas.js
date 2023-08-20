import { collectionGen, startTransaction } from "../utils/db.js";

class Citas {
    constructor() { }

    async getAllDates() {
        let session;
        try {
            session = await startTransaction();
            const productosCollection = await collectionGen("cita");
            const result = productosCollection.aggregate([
                {
                    $project: {
                        id: "$_id",
                        fecha: "$cit_fecha",
                        idEstadoCita: "$cit_estadoCita",
                        idMedico: "$cit_medico",
                        idUsuario: "$cit_datosUsuario",
                        _id: 0
                    }
                },
                {
                    $sort: {
                        fecha: 1
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
export default Citas;