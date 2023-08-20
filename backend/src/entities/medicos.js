import { collectionGen, startTransaction } from "../utils/db.js";

class Medicos {
    constructor() { }

    async getAllSpecialist(especialidad) {
        let session;
        try {
            session = await startTransaction();
            const productosCollection = await collectionGen("medico");
            const result = productosCollection.aggregate([
                {
                    $lookup: {
                        from: "especialidad",
                        localField: "med_especialidad",
                        foreignField: "_id",
                        as: "especialidad"
                    }
                },
                {
                    $unwind: "$especialidad"
                },
                {
                    $project: {
                        id: "$_id",
                        nombre: "$med_nombreCompleto",
                        consultorio: "$med_consultorio",
                        especialidad: "$especialidad.esp_nombre",
                        _id: 0
                    }
                },
                {
                    $match: {
                        especialidad: { $eq: especialidad }
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
export default Medicos;