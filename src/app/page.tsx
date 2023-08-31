import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import NotFound from "@/components/NotFound";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import NoGuild from "@/components/NoGuild";

const Page = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        // Redirect to sign in page
        return redirect('/api/auth/signin');
    }

    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id,
        },
        include: {
            guilds: {
                include: {
                    guild: {
                        include: {
                            channels: true
                        }
                    }
                }
            }
        }
    });

    const guild = user?.guilds[0]?.guild

    if (!guild) {
        return (
            <NoGuild/>
        );
    }

    return redirect(`/guilds/${guild.id}/channels/${guild.channels[0].id}`);
};

export default Page;