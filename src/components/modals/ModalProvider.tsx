import React from 'react';
import CreateChannelModal from "@/components/modals/CreateChannelModal";
import CreateGuildModal from "@/components/modals/CreateGuildModal";

const ModalProvider = () => {
    return (
        <>
            <CreateChannelModal/>
            <CreateGuildModal/>
        </>
    );
};

export default ModalProvider;