import {FaHashtag} from "react-icons/fa6";
import React from "react";
import {twMerge} from "tailwind-merge";
import {BiSolidSpeaker} from "react-icons/bi";

const ChannelTypeIcon = ({type, className}: {type: 'TEXT' | 'VOICE', className?: string}) => {
    if (type === "TEXT") return <FaHashtag className={twMerge("w-6 h-6 text-neutral-400", className)}/>;
    if (type === "VOICE") return <BiSolidSpeaker className={twMerge("w-6 h-6 text-neutral-400", className)}/>;
};

export default ChannelTypeIcon;