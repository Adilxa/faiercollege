import React from 'react';
import { BenefitsCard } from '@/constants/Benefits';


function Benefits() {
    return (
        <section className='container mb-10'>
            <h1 className='py-3 border-2 pl-2 text-4xl  font-medium text-[#2C2052] '>BENEFITS FROM THE COLLEGE</h1>
            {
                BenefitsCard.map((el, i) => <p key={el.title + i} className='py-3 border-2 border-t-0 pl-2 text-l max-md:text-[17px] lg:text-xl  text-[#2C2052]'>{i + 1}. {el.title}</p>)
            }
        </section>
    )
}

export default Benefits