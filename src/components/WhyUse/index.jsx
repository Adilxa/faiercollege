import React from 'react'
import BackgroundImage from './BackgroundImage';
import MainBg from "../../public/Girl.png"

function WhyShould() {

    return (
        <main className='w-full mb-10'>
            <BackgroundImage imageUrl={MainBg}>
                <div className='container text-white'>
                    <h1 className='text-4xl mb-3 font-medium'>WHY SHOULD YOU CHOOSE PAIER</h1>
                    <p className='text-l font-light max-md:text-[17px] lg:text-xl'>Paier College is an institution that prepares students for
                        Paier College's mission is to attract talented and inspired people by encouraging intellectual curiosity and innovation through the provision of a forward-thinking curriculum that reflects the evolving needs of our society. This is accomplished by promoting a culture that values critical thinking skills, civic responsibility, and collaborative experiences.
                        We teach the skills needed to succeed in a range of careers.
                        Our curricula delves not only into the conceptual and theoretical but into the practical as well. Our teaching is hands-on, focused on aesthetics, and geared toward application and business.
                    </p>
                </div>
            </BackgroundImage>
        </main>
    )
}

export default WhyShould