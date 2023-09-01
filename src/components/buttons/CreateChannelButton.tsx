"use client"

import React from 'react';
import useCreateChannelModal from "@/hooks/useCreateChannelModal";

const CreateChannelButton = () => {
    const {setOpen} = useCreateChannelModal()

    return (
        <button className='hover:bg-discord-gray-1 cursor-pointer' onClick={() => setOpen(true)}>Create Channel</button>
    );
};

export default CreateChannelButton;