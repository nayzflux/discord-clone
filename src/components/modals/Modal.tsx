import React from 'react';

const Modal = ({children, open}: {children: React.ReactNode, open?: boolean}) => {
    if (!open) return null;

    return (
        <div className="top-0 left-0 absolute h-screen w-screen flex bg-black bg-opacity-70 justify-center items-center">
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-discord-gray-2 h-1/2 w-1/2 shadow-2xl">
                {children}
            </div>
        </div>
    );
};

export default Modal;