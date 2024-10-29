'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { LuMoveRight } from "react-icons/lu";

const Health = () => {
    const [active, setActive] = useState('dog');
    const handleActive = (value) => {
        setActive(value);
    };

    const dogData = [
        { item: 'dog regular checkup' },
        { item: 'dog dental care' },
        { item: 'dog nutrition' },
        { item: 'dog vaccination' },
    ];
    const catData = [
        { item: 'cat regular checkup' },
        { item: 'cat dental care' },
        { item: 'cat nutrition' },
        { item: 'cat vaccination' },
    ];
    const otherData = [
        { item: 'other pet checkup' },
        { item: 'other pet dental care' },
        { item: 'other pet nutrition' },
        { item: 'other pet vaccination' },
    ];

    // Choose the correct data array based on the active tab
    const currentData = active === 'dog' ? dogData : active === 'cat' ? catData : otherData;

    return (
        <div className='pet-container mt-20 flex flex-col md:flex-row'>
            <div className='flex-1'>
                <h1 className='heading1 !text-left'>Health and Wellness <br className='hidden lg:flex' /> Services</h1>
                <p className='description mt-5 lg:mt-6'>
                    Designed so animals can relax & indulge in pet stylists, <br className='hidden lg:flex' />
                    run around our exercise yards, make new friends.
                </p>

                <div className='mt-7 md:mt-8 xl:mt-10 flex items-center gap-4 lg:gap-8 xl:gap-10'>
                    <button
                        onClick={() => handleActive('dog')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'dog' ? 'underline text-primary' : ''}`}
                    >
                        For Dog
                    </button>
                    <button
                        onClick={() => handleActive('cat')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'cat' ? 'underline text-primary' : ''}`}
                    >
                        For Cat
                    </button>
                    <button
                        onClick={() => handleActive('others')}
                        className={`text-sm lg:text-[18px] font-semibold font-laila ${active === 'others' ? 'underline text-primary' : ''}`}
                    >
                        For Others
                    </button>
                </div>

                <div className='mt-7 lg:mt-8 xl:mt-10 flex flex-col gap-6 w-full lg:w-[60%]'>
                    {currentData.map((data, index) => (
                        <Link
                            key={index}
                            href='#'
                            className='heading2 !font-medium flex items-center justify-between p-3 border rounded-tr-lg rounded-br-lg hover:bg-primary hover:text-white transition-all duration-300'
                        >
                            {data.item} <LuMoveRight />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex-1'>
                {/* Additional content for the selected pet type can go here */}
            </div>
        </div>
    );
};

export default Health;
