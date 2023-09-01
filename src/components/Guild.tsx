import React from 'react';
import ChannelMenu from "@/components/ChannelMenu";
import ChannelHeader from "@/components/ChannelHeader";
import MemberList from "@/components/MemberList";
import TextChannel from "@/components/TextChannel";
import VoiceChannel from "@/components/VoiceChannel";

const Guild = async ({guild, channel}: {guild: any, channel: any}) => {
    return (
        <div className="flex h-screen bg-discord-gray-2 w-full">
            <ChannelMenu channels={guild.channels} guild={guild}/>

            <div className="flex flex-col flex-grow">
                <ChannelHeader channel={channel}/>

                <div className="flex flex-grow overflow-hidden">
                    {channel.type === "TEXT" ? <TextChannel channel={channel}/> : <VoiceChannel channel={channel}/>}

                    <MemberList members={guild.members}/>
                </div>
            </div>
        </div>
    );
};

export default Guild;