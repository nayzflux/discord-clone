import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import pusherServer from "@/lib/pusherServer";

export async function POST(request: Request, {params}: {params: {guildId: string, channelId: string}}) {
    const session = await getServerSession(authOptions);

    console.log(session)

    if (!session?.user) return NextResponse.json({message: `Auth is required`}, {status: 401});

    const {content} = await request.json();
    const {guildId, channelId} = params;

    const message = await prisma.message.create({
        data: {
            content,
            channelId,
            authorId: session.user.id
        },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true
                }
            },
        }
    });

    await pusherServer.trigger(channelId, 'messageCreate', message);

    return NextResponse.json(message);
}