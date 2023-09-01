import React from 'react';
import Image from "next/image";
import {twMerge} from "tailwind-merge";

const Avatar = ({user, className}: { user: any, className?: string }) => {
    return <Image className={twMerge("rounded-full h-11 w-11", className)} src={user.image || '/default.png'} alt="User Avatar" width={48} height={48}/>;
};

export default Avatar;