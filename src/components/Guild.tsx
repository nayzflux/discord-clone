import React from 'react';
import ChannelMenu from "@/components/ChannelMenu";
import ChannelHeader from "@/components/ChannelHeader";
import Message from "@/components/Message";
import MessageInput from "@/components/MessageInput";
import ChatMessage from "@/components/ChatMessage";

const Guild = async ({guild, channel}: {guild: any, channel: any}) => {
    return (
        <div className="flex h-screen bg-discord-gray-2 w-full">
            <ChannelMenu channels={guild.channels} guild={guild}/>

            <div className="flex flex-col flex-grow">
                <ChannelHeader channel={channel}/>

                <div className="flex flex-grow overflow-auto flex-col-reverse">
                    <ChatMessage initialMessages={channel.messages}/>
                </div>

                <MessageInput/>
            </div>
        </div>
    );
};

export default Guild;