import React from 'react';
import GuildIcon from "@/components/GuildIcon";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import CreateGuildButton from "@/components/CreateGuildButton";

const Sidebar = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) return null;

    console.log(session.user)

    const user = await prisma.user.findUnique(({
        where: {
            id: session.user.id
        },
        include: {
            guilds: {
                include: {
                    guild: true
                }
            }
        }
    }));

    if (!user) return null;

    return (
        <nav className="flex flex-col gap-2 bg-discord-gray-4 p-3 h-screen">
            {user?.guilds.map(({guild}) => (
                <GuildIcon key={guild.id} guild={guild}/>
            ))}

            <CreateGuildButton/>
        </nav>
    );
};

export default Sidebar;