import React from 'react';
import {FaMagnifyingGlass} from "react-icons/fa6";

const SearchBar = () => {
    return (
        <div className="hidden bg-discord-gray-4 md:flex flex-row gap-1 p-1 rounded items-center font-normal text-xs">
            <input className="bg-transparent placeholder:text-neutral-400 outline-none" placeholder="Search"/>
            <FaMagnifyingGlass className="h-4 w-4 ml-auto text-neutral-400"/>
        </div>
    );
};

export default SearchBar;