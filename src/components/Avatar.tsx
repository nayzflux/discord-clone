import React from 'react';
import Image from "next/image";

const Avatar = ({user}: { user: any }) => {
    return <Image className="rounded-full h-11 w-11" src={user.image || '/default.png'} alt="User Avatar" width={48} height={48}/>;
};

export default Avatar;