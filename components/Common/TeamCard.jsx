import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamCard = ({image, socialData, name, title}) => {
    return (
        <div className='p-4 md:p-5 lg:p-6 bg-white rounded-[20px] group transition-all duration-300 hover:scale-105'>
            <Image className='w-full' src={image} width={264} height={288} alt='Team Image' />

            <div className='flex flex-col justify-end items-end p-5 gap-4 -mt-48 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                {socialData.map((data, index) => (
                    <Link href={data.link} key={index} className='team-social-styles'>
                        {data.icon}
                    </Link>
                ))}
            </div>

            <h3 className='heading2 mt-4 md:mt-5 lg:mt-6 group-hover:text-primary transition-all duration-300'> {name} </h3>
            <p className='description capitalize'>{title}</p>
        </div>
    );
};

export default TeamCard;