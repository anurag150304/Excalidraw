export class errHandler extends Error {
    status: number;
    constructor(message: string, status: number) {
        super();
        this.message = message;
        this.status = status;
    }
}