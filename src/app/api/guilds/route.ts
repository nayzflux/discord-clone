import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    console.log(session)

    if (!session?.user) return NextResponse.json({message: `Auth is required`}, {status: 401});

    const {name} = await request.json();

    const guild = await prisma.guild.create({
        data: {
            name: name,
            members: {
                create: {
                    userId: session.user.id
                }
            },
            channels: {
                create: {
                    name: 'general',
                    type: 'TEXT'
                }
            }
        }
    });

    return NextResponse.json(guild);
}