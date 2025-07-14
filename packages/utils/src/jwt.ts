import jwt from "jsonwebtoken";

export function generateToken(email: string, secretKey: string) {
    try {
        const token = jwt.sign({ email }, secretKey, { expiresIn: '24h' });
        return { token };
    } catch (err) {
        console.log((err as Error).message);
        return { err: (err as Error).message };
    }
}