import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {prisma} from "@/lib/prisma";
import NotFound from "@/components/NotFound";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic";

const ServerIdPage = async ({params}: {params: Params}) => {
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
            channels: true
        }
    });

    if (!guild) {
        return <NotFound/>
    }

    return redirect(`/guilds/${params.guildId}/channels/${guild.channels[0].id}`)
};

export default ServerIdPage;