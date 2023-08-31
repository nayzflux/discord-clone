import React from 'react';
import Image from "next/image";
import Link from "next/link";

const GuildIcon = ({guild}: {guild: any}) => {
    return (
        <Link href={`/guilds/${guild.id}`}>
            <Image className="rounded-[100%] hover:rounded-xl transition-all cursor-pointer" src={guild?.icon || '/default.png'} alt="Guild Icon" width={48} height={48}/>
        </Link>
    );
};

export default GuildIcon;