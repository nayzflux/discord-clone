import NextAuth, {NextAuthOptions} from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord"

import {prisma} from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: { params: { scope: 'identify email' } },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub as string;
            }

            return session
        }
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }