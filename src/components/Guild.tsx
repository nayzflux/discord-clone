import React from 'react';
import ChannelMenu from "@/components/ChannelMenu";
import ChannelHeader from "@/components/ChannelHeader";
import MessageInput from "@/components/MessageInput";
import ChatMessage from "@/components/ChatMessage";
import MemberList from "@/components/MemberList";

const Guild = async ({guild, channel}: {guild: any, channel: any}) => {
    return (
        <div className="flex h-screen bg-discord-gray-2 w-full">
            <ChannelMenu channels={guild.channels} guild={guild}/>

            <div className="flex flex-col flex-grow">
                <ChannelHeader channel={channel}/>

                <div className="flex flex-grow overflow-hidden">
                    <div className="flex flex-col flex-grow">
                        <div className="flex flex-grow overflow-auto flex-col-reverse">
                            <ChatMessage initialMessages={channel.messages}/>
                        </div>

                        <MessageInput/>
                    </div>

                    <MemberList members={guild.members}/>
                </div>
            </div>
        </div>
    );
};

export default Guild;