import React from 'react';
import VideoImage from '../../public/Video.svg';
import Image from 'next/image';

function VideoSide() {
    return (
        <section className='mb-10'>
            <Image alt="video" src={VideoImage} className='max-md:bg-right  lg:h-[80svh]  max-md:bg-contain ' style={{ width: "100%" }} />
        </section>
    )
}

export default VideoSide