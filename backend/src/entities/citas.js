import { collectionGen, startTransaction } from "../utils/db.js";

class Citas {
    constructor() { }

    async getAllDates() {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
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
    };

    async getNextDate(idUsuario) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
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
                    $match: {
                        idUsuario: { $eq: idUsuario },
                        fecha: { $gte: new Date() }
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
    };

    async getPatientsdateByMedic(idMedico) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
                {
                    $lookup: {
                        from: "usuario",
                        localField: "cit_datosUsuario",
                        foreignField: "_id",
                        as: "data_usuario"

                    }
                },
                {
                    $unwind: "$data_usuario"
                },
                {
                    $project: {
                        id: "$_id",
                        fecha: "$cit_fecha",
                        idEstadoCita: "$cit_estadoCita",
                        idMedico: "$cit_medico",
                        usuarioInfo: {
                            id: "$data_usuario._id",
                            primerNombre: "$data_usuario.usu_nombre",
                            segundoNombre: "$data_usuario.usu_segdo_nombre",
                            primerApellido: "$data_usuario.usu_primer_apellido_usuar",
                            segundoApellido: "$data_usuario.usu_segdo_apellido_usuar",
                            telefono: "$data_usuario.usu_telefono",
                        },
                        _id: 0
                    }
                },
                {
                    $match: {
                        idMedico: { $eq: idMedico }
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
    };

    async getPatientsdateByPatient(cit_datosUsuario) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
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
                    $match: {
                        idUsuario: { $eq: cit_datosUsuario }
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
    };

    async getDatesbyDate(fecha) {
        let session;
        const fechaFormateada = new Date(fecha)
        const diaSiguiente = new Date(fechaFormateada)
        diaSiguiente.setDate(diaSiguiente.getDate() + 1)
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
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
                    $match: {
                        fecha: {
                            $gte: fechaFormateada,
                            $lte: diaSiguiente
                        }
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
    };

    async getAmountDatesbyDateAndMedic(fecha, idMedico) {
        let session;
        const fechaFormateada = new Date(fecha)
        const diaSiguiente = new Date(fechaFormateada)
        diaSiguiente.setDate(diaSiguiente.getDate() + 1)
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
                {
                    $match: {
                        cit_fecha: {
                            $gte: fechaFormateada,
                            $lte: diaSiguiente
                        },
                        cit_medico: { $eq: idMedico }
                    }
                },
                {
                    $project: {
                        id: "$_id",
                        idEstadoCita: "$cit_estadoCita",
                        idUsuario: "$cit_datosUsuario",
                        _id: 0
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
    };

    async getDateConsultory(idUsuario) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
                {
                    $lookup: {
                        from: "medico",
                        localField: "cit_medico",
                        foreignField: "_id",
                        as: "medicoInfo"

                    }
                },
                {
                    $unwind: "$medicoInfo"
                },
                {
                    $project: {
                        idCita: "$_id",
                        fecha: "$cit_fecha",
                        estado: "$cit_estadoCita",
                        consultorioID: "$medicoInfo.med_consultorio",
                        idUsuario: "$cit_datosUsuario"
                    }
                },
                {
                    $lookup: {
                        from: "consultorio",
                        localField: "consultorioID",
                        foreignField: "_id",
                        as: "consultorioInfo"
                    }
                },
                {
                    $unwind: "$consultorioInfo"
                },
                {
                    $match: {
                        idUsuario: { $eq: idUsuario },
                        estado: { $eq: 5 }
                    }
                },
                {
                    $project: {
                        idCita: 1,
                        fecha: 1,
                        consultorio: "$consultorioInfo.cons_nombre",
                        _id: 0
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
    };

    async getDatesByGander(genero) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
                {
                    $lookup: {
                        from: "usuario",
                        localField: "cit_datosUsuario",
                        foreignField: "_id",
                        as: "usuarioInfo"
                    }
                },
                {
                    $unwind: "$usuarioInfo"
                },
                {
                    $project: {
                        id: "$_id",
                        fecha: "$cit_fecha",
                        idMedico: "$cit_medico",
                        idUsuario: "$cit_datosUsuario",
                        generoid: "$usuarioInfo.usu_genero",
                        estado: "$cit_estadoCita"
                    }
                },
                {
                    $match: {
                        generoid: { $eq: genero },
                        estado: { $eq: 5 }
                    }
                },
                {
                    $project: {
                        id: 1,
                        fecha: 1,
                        idMedico: 1,
                        idUsuario: 1,
                        _id: 0
                    }
                },
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
    };

    async getSupendedDatesByMonth(mes) {
        let session;
        try {
            session = await startTransaction();
            const citaCollection = await collectionGen("cita");
            const result = citaCollection.aggregate([
                {
                    $lookup: {
                        from: "usuario",
                        localField: "cit_datosUsuario",
                        foreignField: "_id",
                        as: "usuarioInfo"
                    }
                },
                {
                    $unwind: "$usuarioInfo"
                },
                {
                    $lookup: {
                        from: "medico",
                        localField: "cit_medico",
                        foreignField: "_id",
                        as: "medicoinfo"
                    }
                },
                {
                    $unwind: "$medicoinfo"
                },
                {
                    $project: {
                        id: "$_id",
                        mes: { $month: "$cit_fecha" },
                        fecha: "$cit_fecha",
                        medico: "$medicoinfo.med_nombreCompleto",
                        usuario: {
                            $concat: ["$usuarioInfo.usu_nombre", " ", "$usuarioInfo.usu_primer_apellido_usuar", " ", "$usuarioInfo.usu_segdo_apellido_usuar"]
                        },
                        generoid: "$usuarioInfo.usu_genero",
                        estado: "$cit_estadoCita",
                        _id: 0
                    }
                },
                {
                    $match: {
                        mes: mes,
                        estado: 2
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
    };


}
export default Citas;