import React from 'react';
import ChannelName from "@/components/ChannelName";
import IconButton from "@/components/IconButton";
import {FaHashtag} from "react-icons/fa6";
import {BsBellSlashFill, BsFillPinAngleFill} from "react-icons/bs";
import {BiSolidGroup, BiSolidHelpCircle, BiSolidInbox} from "react-icons/bi";
import SearchBar from "@/components/SearchBar";

const ChannelHeader = ({channel}: {channel: any}) => {
    return (
        <header className="flex gap-3 items-center p-4 bg-discord-gray-2 shadow-lg">
            <ChannelName name={channel.name} type={channel.type}/>

            <div className="flex flex-row gap-3 items-center ml-auto">
                <IconButton icon={FaHashtag}/>
                <IconButton icon={BsBellSlashFill}/>
                <IconButton icon={BsFillPinAngleFill}/>
                <IconButton icon={BiSolidGroup}/>

                <SearchBar/>

                <IconButton icon={BiSolidInbox}/>
                <IconButton icon={BiSolidHelpCircle}/>
            </div>
        </header>
    );
};

export default ChannelHeader;