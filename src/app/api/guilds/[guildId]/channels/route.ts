import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function POST(request: Request, {params}: {params: {guildId: string}}) {
    const session = await getServerSession(authOptions);

    console.log(session)

    if (!session?.user) return NextResponse.json({message: `Auth is required`}, {status: 401});

    const {name, type} = await request.json();
    const {guildId} = params;

    const message = await prisma.channel.create({
        data: {
            type,
            name,
            guildId,
        },
    });

    return NextResponse.json(message);
}