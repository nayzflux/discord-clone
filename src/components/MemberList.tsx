"use client";

import React from 'react';
import Avatar from "@/components/Avatar";
import useMemberList from "@/hooks/useMemberList";

const MemberList = ({members}: {members: any}) => {
    const { open} = useMemberList();

    if (!open) return null;

    return (
        <div className="flex flex-col bg-discord-gray-3 w-64">
            <div className="flex flex-col gap-0.5 p-2">
                {members?.map(({user}: any) => (
                    <div key={user.id} className="flex gap-3 items-center hover:bg-discord-gray-1 font-semibold px-2 py-1 rounded cursor-pointer">
                        <Avatar className="w-10 h-10" user={user}/>
                        <p>{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberList;