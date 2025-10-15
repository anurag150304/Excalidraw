import jwt, { JwtPayload } from "jsonwebtoken";

interface JWTType extends JwtPayload {
    email: string;
}

export function generateToken(email: string, secretKey: string) {
    try {
        const token = jwt.sign({ email }, secretKey);
        return { token };
    } catch (err) {
        console.log((err as Error).message);
        return { err };
    }
}

export function validateToken(token: string, secretKey: string) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return { decoded: (decoded as JWTType) };
    } catch (err) {
        console.log((err as Error).message);
        return { err };
    }
}