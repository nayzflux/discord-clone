import React from 'react';
import ChatMessage from "@/components/ChatMessage";
import MessageInput from "@/components/MessageInput";

const TextChannel = ({channel}: {channel: any}) => {
    return (
        <div className="flex flex-col flex-grow">
            <div className="flex flex-grow overflow-auto flex-col-reverse">
                <ChatMessage initialMessages={channel.messages}/>
            </div>

            <MessageInput/>
        </div>
    );
};

export default TextChannel;