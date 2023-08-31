"use client"

import React, {useState} from 'react';
import axios from "axios";
import {useParams, useRouter} from "next/navigation";

const MessageInput = () => {
    const params = useParams();
    const router = useRouter()
    const [content, setContent] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (content === "") return;

        axios.post(`/api/guilds/${params.guildId}/channels/${params.channelId}/messages`, {
            content
        }).then(() => {
            console.log('Posted')
        }).catch(() => {
            console.log('Error')
            router.refresh()
        })

        setContent("")
    }

    const onChange = (e: any) => {
        e.preventDefault();
        setContent(e.target.value)
    }

    return (
        <div className="bg-discord-gray-1 px-4 py-2 rounded-lg m-4">
            <form onSubmit={onSubmit}>
                <input className="bg-transparent outline-none text-lg text-white placeholder:text-neutral-400" placeholder="Enter message..."  onChange={onChange} value={content} />
            </form>
        </div>
    );
};

export default MessageInput;