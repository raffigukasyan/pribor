

class ApiErrors extends Error {
    status: number
    message: string
    constructor(status: number, message:string) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message:string):ApiErrors {
        return new ApiErrors(404, message);
    }

    static internal(message:string):ApiErrors {
        return new ApiErrors(500, message);
    }

    static forbidden(message:string):ApiErrors {
        return new ApiErrors(403, message);
    }
}

export default ApiErrors