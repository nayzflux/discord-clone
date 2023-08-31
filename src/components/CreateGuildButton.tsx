"use client"

import React from 'react';
import useCreateGuildModal from "@/hooks/useCreateGuildModal";
import {AiOutlinePlus, AiOutlinePlusCircle} from "react-icons/ai";

const CreateGuildButton = () => {
    const {setOpen} = useCreateGuildModal();

    return (
        <div onClick={() => setOpen(true)} className="cursor-pointer h-12 w-12 bg-discord-gray-2 flex items-center justify-center rounded-full">
            <AiOutlinePlus className="text-green-500 w-1/2 h-1/2"/>
        </div>
    );
};

export default CreateGuildButton;