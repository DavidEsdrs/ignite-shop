export class APIErrors extends Error {
    status: number;

    constructor(mes: string, status: number) {
        super(mes);
        Object.setPrototypeOf(this, APIErrors.prototype);
        this.status = status;
    }
}

export class EmailAlreadyTakenError extends APIErrors {
    constructor() {
        super("The given email is already taken!", 400);
    }
}

export class InvalidQueryOptionsError extends APIErrors {
    constructor() {
        super("Invalid query options given!", 422)
    }
}