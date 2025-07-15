import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            accessToken: string;
            name: string;
            email: string;
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        name: string;
        email: string;
    }
}


declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        accessToken: string;
        name: string;
        email: string;
    }
}