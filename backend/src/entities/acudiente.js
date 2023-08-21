import { collectionGen, startTransaction } from "../utils/db.js";

class Acudientes {
    constructor() { }

    async getAcudienteById(id) {
        let session;
        try {
            session = await startTransaction();
            const productosCollection = await collectionGen("acudiente");
            const result = productosCollection.countDocuments({ _id: id });
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
export default Acudientes;