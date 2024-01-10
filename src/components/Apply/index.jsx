import React from 'react'

function Apply() {
    return (
        <section className='container'>
            <section className='mb-10 border-2 border-[#2C2052] flex flex-col items-center gap-7 pt-5 max-md:gap-4 max-md:pt-3'>
                <h1 className='text-[#2C2052] text-4xl  font-medium'>APPLY</h1>
                <h3 className='text-[#2C2052] text-2xl  font-medium mb-2 max-md:text-xl max-md:font-normal  text-center'>START THE JOURNEY TO YOUR DREAM PROFESSION WITH LIKE-MINDED PEOPLE</h3>
                <button className='w-full p-4 bg-[#2C2052] text-white'>FOLLOW LINK</button>
            </section>
            <section className='mb-10 bg-[#2C2052] p-6 text-center'>
                <h1 className='text-white text-4xl max-md:text-3xl font-medium border-b-2 pb-3 mb-3'>Statement of Non-Discrimination
                </h1>
                <h3 className='text-white text-lg font-light mb-2 max-md:text-[14px] max-md:font-normal max-md:text-start  max-md:leading-5'>
                    Paier College admits students regardless of race, color, sex, pregnancy, religion, creed, ethnicity, national origin, disability, age, sexual orientation, gender identity, veteran or military status, predisposing genetic characteristics, victim status, or any other protected category (under applicable local, state, or federal law) to all the rights, privileges, programs, and activities generally accorded or made available to students of The College. Also, The College does not discriminate on the basis of the above characteristics in the administration of its educational policies, admissions policies, scholarships and loan programs, or any other College-administered programs.
                </h3>
                <h3 className='text-white text-lg font-light mb-2 max-md:text-[14px] max-md:font-normal max-md:text-start '>
                    The Admissions Office can be contacted at admissions@paier.edu.
                </h3>
            </section>
        </section>
    )
}

export default Apply