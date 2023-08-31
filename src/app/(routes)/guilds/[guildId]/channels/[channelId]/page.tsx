import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {prisma} from "@/lib/prisma";
import Guild from "@/components/Guild";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import NotFound from "@/components/NotFound";

export const dynamic = "force-dynamic";

const getGuild = async (guildId: string) => {
    const guild = await prisma.guild.findUnique({
        where: {
            id: guildId,
        },
        include: {
            members: {
                include: {
                    user: true
                }
            },
            channels: {
                include: {
                    category: true,
                }
            }
        }
    });
    return guild
}

const getChannel = async (channelId: string) => {
    const channel = await prisma.channel.findUnique({
        where: {
            id: channelId,
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                            email: false
                        }
                    }
                }
            }
        }
    });
    return channel
}

const GuildChannelPage = async ({params}: {params: Params}) => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        // Redirect to sign in page
        return redirect('/api/auth/signin');
    }

    const [guild, channel] = await Promise.all([getGuild(params.guildId), getChannel(params.channelId)]);

    console.log("channel page")

    if (!guild || !channel) {
        return (
            <NotFound/>
        )
    }

    return (
        <Guild guild={guild} channel={channel}/>
    );
};

export default GuildChannelPage;
