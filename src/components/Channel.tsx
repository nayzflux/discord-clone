"use client"

import React from 'react';
import ChannelTypeIcon from "@/components/ChannelTypeIcon";
import clsx from "clsx";
import Link from "next/link";
import {useParams} from "next/navigation";

const Channel = ({channel}: {channel: any}) => {
    const params = useParams();

    return (
        <Link href={`/guilds/${channel.guildId}/channels/${channel.id}`} className={clsx("flex hover:bg-discord-gray-1 hover:text-white font-semibold text-neutral-400 items-center gap-2 px-2 py-1 rounded cursor-pointer", params.channelId === channel.id && "bg-discord-gray-1 text-white")}>
            <ChannelTypeIcon className="w-4 h-4" type={channel.type}/>
            <p className="">{channel.name}</p>
        </Link>
    );
};

export default Channel;