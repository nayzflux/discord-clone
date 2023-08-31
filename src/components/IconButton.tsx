import React from 'react';
import {IconType} from "react-icons";

const IconButton = ({icon: Icon}: {icon: IconType}) => {
    return <Icon className="cursor-pointer text-neutral-400 h-6 w-6"/>;
};

export default IconButton;