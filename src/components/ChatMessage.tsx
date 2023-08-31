"use client";

import React, {useEffect, useState} from 'react';
import Message from "@/components/Message";
import pusherClient from "@/lib/pusherClient";
import {useParams} from "next/navigation";

const ChatMessage = ({initialMessages}: {initialMessages: any[]}) => {
    const [incomingMessages, setIncomingMessages] = useState(initialMessages);
    const {channelId} = useParams() as {channelId: string};

    useEffect(() => {
        const channel = pusherClient.subscribe(channelId);
        channel.bind('messageCreate', addMessage);
        channel.bind('messageDelete', removeMessages);

        return() => {
            pusherClient.unsubscribe(channelId)
            channel.unbind('messageCreate', addMessage);
            channel.unbind('messageDelete', removeMessages);
        }
    }, []);

    const addMessage = (message: any) => {
        setIncomingMessages(m => [...m, message])
    }

    const removeMessages = (message: any) => {
        setIncomingMessages(m => m.filter(m => m.id !== message.id))
    }

    return (
        <div>
            {incomingMessages?.map((message: any) => (
                <Message key={message.id} message={message}/>
            ))}
        </div>
    );
};

export default ChatMessage;