import AppError from "../errors/AppError.js";
import { InternalServerError } from "../errors/typesError.js";

export const errorHandler = (err, res) => {

    if(!(err instanceof AppError)) {
        err = new InternalServerError(
            err.message || 'Error Inesperado 🤦‍♀️', 
            'Ocurrio un Error inesperado que requiere analisis'
        )
    }

    const errorResponse = {
        status: 'Error',
        code: err.statusCode,
        message: err.message,
        details: err.details
    };

  

    res.status(err.statusCode).json(errorResponse);
}