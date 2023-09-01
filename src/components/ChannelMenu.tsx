import React from 'react';
import Channel from "@/components/Channel";
import User from "@/components/User";
import CreateChannelButton from "@/components/buttons/CreateChannelButton";

const ChannelMenu = ({channels, guild}: {channels: any[], guild: any}) => {

    return (
        <div className="flex flex-col bg-discord-gray-3 w-64">
            <div className="p-4 shadow-lg font-semibold">
                <p>{guild.name}</p>
            </div>

            <nav className="flex flex-col gap-0.5 p-2">
                {channels?.map((channel) => (
                    <Channel channel={channel}/>
                ))}

                <CreateChannelButton/>
            </nav>

            <User/>
        </div>
    );
};

export default ChannelMenu;