"use client"

import React from 'react';
import {BiSolidGroup} from "react-icons/bi";
import IconButton from "@/components/buttons/IconButton";
import clsx from "clsx";
import useMemberList from "@/hooks/useMemberList";

const MemberListButton = () => {
    const {open, setOpen} = useMemberList();

    return (
        <div onClick={() => setOpen(!open)}>
            <IconButton className={clsx("hover:text-white", open && "text-white")} icon={BiSolidGroup}/>
        </div>
    );
};

export default MemberListButton;