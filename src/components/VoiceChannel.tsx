import React from 'react';
import ChatRoom from "@/components/rooms/ChatRoom";

const TextChannel = ({channel}: {channel: any}) => {
    return (
        <ChatRoom channel={channel}/>
    );
};

export default TextChannel;