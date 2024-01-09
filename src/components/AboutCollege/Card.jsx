import React from 'react';

function AboutCard({ title, image, to }) {
    return (
        <a
            className='min-h-80 flex flex-col'
            style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            href={to}
            target='_blank'
        >
            <div className='flex-grow'></div>
            <div className='bg-primary text-white p-2 text-center text-[36px]'>{title}</div>
        </a>
    );
}

export default AboutCard;
