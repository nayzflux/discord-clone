import React from 'react';
import {ChannelType} from "discord-api-types/v10";
import ChannelTypeIcon from "@/components/ChannelTypeIcon";

const ChannelName = ({name, type}: {name: string, type: ChannelType}) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <ChannelTypeIcon type={type}/>
            <p>{name}</p>
        </div>
    );
};

export default ChannelName;