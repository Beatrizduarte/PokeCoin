import { Response } from 'express';

type errorResponseType ={ type: number, code: String, message?: string }

class ApplicationError {
    async throw (response: Response ,{ type, code, message }: errorResponseType ){
        response.status(type).json({ code, message })
    }
}

export default new ApplicationError();