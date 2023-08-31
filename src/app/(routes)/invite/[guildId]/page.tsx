
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import NotFound from "@/components/NotFound";

const Page = async ({params}: {params: Params}) => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        // Redirect to sign in page
        return redirect('/api/auth/signin');
    }

    const guild = await prisma.guild.findUnique({
        where: {
            id: params.guildId,
        },
        include: {
            members: true,
            channels: true
        }
    });

    if (!guild) {
        return (
            <NotFound/>
        )
    }

    if (guild.members.find(m => m.userId === session.user.id)) {
        return redirect(`/${guild.id}/${guild.channels[0].id}`)
    }

    const updatedGuild = await prisma.guild.update({
        where: {
            id: params.guildId,
        },
        data: {
            members: {
                create: {
                    userId: session.user.id
                }
            }
        }
    });

    return redirect(`/${guild.id}/${guild.channels[0].id}`);
};

export default Page;