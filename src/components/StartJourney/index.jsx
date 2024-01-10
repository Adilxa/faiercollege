import React from 'react'
import BackgroundImage from './BackgroundImage';
import MainBg from "../../public/JourneyImage.png"

function StartJourney() {

    return (
        <main className='w-full mb-10 '>
            <BackgroundImage imageUrl={MainBg}>
                <div className='container text-white py-3'>
                    <h1 className='text-4xl mb-3 font-medium'>Start your journey to a successful career with us</h1>
                    <p className='text-l font-light max-md:text-[17px] lg:text-xl mb-3'>
                        Join us and prove to yourself and the world that you have talent and a passion for creativity. We are ready to help you achieve your potential and become a leader in your chosen industry.
                    </p>
                    <a href='/' className=' border-white border-2 py-3 w-full flex justify-center items-center text-4xl font-bold'>MORE</a>
                </div>
            </BackgroundImage>
        </main>
    )
}

export default StartJourney