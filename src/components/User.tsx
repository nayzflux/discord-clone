import React from 'react';
import Avatar from "@/components/Avatar";
import {BiSolidMicrophone} from "react-icons/bi";
import {BsHeadphones} from "react-icons/bs";
import {IoSettingsSharp} from "react-icons/io5";
import {getServerSession} from "next-auth";

const User = async () => {
    const session = await getServerSession();

    if (!session?.user) return null;

    const user = session.user

    return (
        <div className="flex mt-auto items-center bg-discord-gray-4 p-4 gap-3">
            <Avatar className="w-10 h-10" user={user}/>

            <p>{user.name}</p>

            <div className="flex gap-3 ml-auto">
                <BiSolidMicrophone/>
                <BsHeadphones/>
                <IoSettingsSharp/>
            </div>
        </div>
    );
};

export default User;