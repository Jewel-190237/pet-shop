import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

const ReviewCard1 = ({ rate, description, image, name, country }) => {
    return (
        <div className=''>
            <div className='w-full border rounded-[20px]'>
                <div className='bg-white rounded-[20px] shadow-xl'>
                    <span className='p-5 w-full'>
                        <Rate className='p-5' defaultValue={rate} disabled />
                        <p className='description text-justify px-5'>{description}</p>
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-2 ml-16 mt-7 lg:mt-8 xl:mt-10'>
                <Image className='rounded-full' src={image} width={60} height={60} alt='Reviewer' />
                <div>
                    <h4 className='text-[16px] lg:text-[18px] font-semibold font-laila capitalize'>{name}</h4>
                    <p className='text-primary capitalize description !font-medium'>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard1;