import React from 'react';
import {IconType} from "react-icons";
import {twMerge} from "tailwind-merge";

const IconButton = ({icon: Icon, className}: {icon: IconType, className?: string}) => {
    return <Icon className={twMerge("cursor-pointer text-neutral-400 h-6 w-6", className)}/>;
};

export default IconButton;