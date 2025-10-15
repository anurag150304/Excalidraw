import CredentialsProvider from "next-auth/providers/credentials";
import dbClient from "@repo/db-config/dbClient"
import { generateToken } from "@repo/utils/jwt"
import { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email", label: "Email", placeholder: "ex - jhon@gmail.com" },
                password: { type: "password", label: "Password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const user = await dbClient.users.findFirst({ where: { email: credentials.email } });
                    if (!user) throw new Error("User not found!");

                    if (!await bcrypt.compare(credentials.password, user.password)) {
                        throw new Error("Invalid Credentials");
                    }

                    return {
                        id: `${user.id}`,
                        name: `${user.firstname} ${user.lastname ?? ''}`,
                        email: user.email,
                    }
                } catch (err) {
                    const { message } = err as Error
                    throw new Error(message);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;

                const JWT = generateToken(user.email, process.env.NEXTAUTH_SECRET!);
                if (JWT.token) token.accessToken = JWT.token
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.accessToken = token.accessToken
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin',
        error: '/signin'
    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
}