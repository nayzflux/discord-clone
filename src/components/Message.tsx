import React from 'react';
import Avatar from "@/components/Avatar";
import {formatMessageTimestamp} from "@/lib/dayjs";

const Message = ({message}: {message: any}) => {
    return (
        <div className="flex flex-row gap-3 px-4 py-2 hover:bg-discord-gray-3 w-full items-center">
            <Avatar user={message.author}/>

            <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                    <p className="hover:underline transition-all cursor-pointer">{message.author.name}</p>

                    <p className="text-xs text-neutral-400">{formatMessageTimestamp(message.createdAt)}</p>
                </div>

                <p>{message.content}</p>
            </div>
        </div>
    );
};

export default Message;