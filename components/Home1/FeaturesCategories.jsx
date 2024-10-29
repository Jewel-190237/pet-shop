import Image from 'next/image';
import React from 'react';
import HeadingMiddle from '../Common/HeadingMiddle';

const FeaturesCategories = () => {
    // Sample data for feature categories
    const features = [
        {
            id: 1,
            bgImage: '/home1/features/bg.svg',
            innerImage: '/home1/features/1.svg',
            title: 'German Breed Alsatian Puppies',
        },
        {
            id: 2,
            bgImage: '/home1/features/bg.svg',
            innerImage: '/home1/features/2.svg',
            title: 'Golden Retriever Puppies',
        },
        {
            id: 3,
            bgImage: '/home1/features/bg.svg',
            innerImage: '/home1/features/3.svg',
            title: 'Bulldog Puppies',
        },
        {
            id: 4,
            bgImage: '/home1/features/bg.svg',
            innerImage: '/home1/features/4.svg',
            title: 'Poodle Puppies',
        },
        {
            id: 5,
            bgImage: '/home1/features/bg.svg',
            innerImage: '/home1/features/5.svg',
            title: 'Siberian Husky Puppies',
        },
        // Add more items as needed
    ];

    return (
        <div className='max-w-[1320px] mx-auto mt-20'>
            <div className='max-w-[500px] mx-auto'>
                <HeadingMiddle 
                    heading='Features Categories' 
                    description='At petstick, access pet listings, shop easily, and book grooming, vet visits, and training all through personalized profiles.'
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                {features.map(feature => (
                    <div key={feature.id} className='flex flex-col max-w-[200px]'>
                        <div
                            className="max-w-[200px] h-[200px] bg-cover bg-center bg-no-repeat overflow-hidden"
                            style={{ backgroundImage: `url('${feature.bgImage}')` }} // Background image
                        >
                            {/* Inside Image */}
                            <div className="p-4 flex justify-center items-center h-full overflow-hidden">
                                <Image
                                    src={feature.innerImage} // Inside image
                                    alt="Inside Image"
                                    width={150} // Adjust width as needed
                                    height={150}
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="mt-6 max-w-[150px] mx-auto">
                            <h2 className="text-textBody font-bold text-lg font-sans text-center">
                                {feature.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesCategories;
