import React from 'react'
import BackgroundImage from './BackgroundImage';
import MainBg from "../../public/MainBg.png"

function MainInformation() {

    return (
        <main className='w-full mb-10'>
            <BackgroundImage imageUrl={MainBg}>
                <div className='container text-white'>
                    <h1 className='text-4xl mb-3 font-medium'>ABOUT PAIER</h1>
                    <p className='text-l font-light max-md:text-[17px] lg:text-xl'>Paier College is an institution that prepares students for
                        Careers in art, design, communications, coding and
                        marketing. Our new home in Bridgeport, Connecticut offers
                        a wonderful background for creative and inquisitive students, located in the I-95 corridor for access to some
                        the most promising career markets in the Northeast. WITH
                        residential housing on campus, completely
                        an immersive experience at your fingertips. Book your visit today!</p>
                </div>
            </BackgroundImage>
        </main>
    )
}

export default MainInformation