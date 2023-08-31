"use client";

import React, {useState} from 'react';
import useCreateChannelModal from "@/hooks/useCreateChannelModal";
import IconButton from "@/components/IconButton";
import {AiOutlineClose} from "react-icons/ai";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import Modal from "@/components/modals/Modal";
import useCreateGuildModal from "@/hooks/useCreateGuildModal";

const CreateChannelModal = () => {
    const [name, setName] = useState('');
    const {open, setOpen} = useCreateGuildModal();
    const router = useRouter();

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (name === "") return;

        axios.post(`/api/guilds`, {
            name,
        }).then(() => {
            console.log('Posted')
            router.refresh()
        }).catch(() => {
            console.log('Error')
            router.refresh()
        })

        setName("")
        setOpen(false)
    }
    
    return (
        <Modal open={open}>
                <div className="flex">
                    <p>Create a new guild</p>

                    <div className="ml-auto" onClick={() => setOpen(false)}>
                        <IconButton icon={AiOutlineClose}/>
                    </div>
                </div>

                <form className="flex flex-col gap-2">
                    <label className="font-bold uppercase">Guild name</label>
                    <input className="bg-discord-gray-4" value={name} onChange={(e) => setName(e.target.value)}/>

                    <div className="w-full bg-discord-gray-2">
                        <div className="ml-auto flex gap-2">
                            <button className="hover:underline" onClick={() => setOpen(false)}>Cancel</button>
                            <button className="px-2 py-1 bg-blue-500 rounded hover:bg-opacity-80" onClick={onSubmit}>Create guild</button>
                        </div>
                    </div>
                </form>
        </Modal>
    );
};

export default CreateChannelModal;