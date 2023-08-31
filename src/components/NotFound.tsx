import React from 'react';

const NotFound = () => {
    return (
        <div className="w-full h-full flex flex-col flex-grow text-white items-center gap-6 justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">404</h1>
                <h1 className="font-bold text-3xl">Error</h1>
            </div>

            <p className="font-semibold text-neutral-400 text-xl">Sorry but this guild doesn't exists</p>
        </div>
    );
};

export default NotFound;