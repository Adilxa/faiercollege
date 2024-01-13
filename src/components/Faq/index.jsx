"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import CloseIcon from "../../public/svg/closefaq.svg"

function Faq() {

    const [faqState, setState] = useState([
        {
            question: "What`s required for applying?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        },
        {
            question: "Does the department only admit students in the top 10% of their class?",
            answer: "We have a completely holistic review process. When considering students for our programs, we look at applicant portfolios, high school transcripts, admissions essays and test scores. If you are a Studio Art or Visual Art Studies applicant, one of the most important parts of your application is your portfolio.",
            isOpen: false
        },
        {
            question: "Is a portfolio required for all areas of study?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        },
        {
            question: "Can I minor or double-major?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        },
        {
            question: "How can I arrange a tour of the campus?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        },
        {
            question: "When visiting campus, where should I park?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        },
        {
            question: "Does the PAIER College offer scholarships?",
            answer: "We have a completely holistic review process. When considering students for our programs",
            isOpen: false
        }
    ])

    const onCloseClick = (index) => {
        const array = faqState.map((el, i) => i == index ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false })
        setState(array)
    }

    return (
        <section className='container mb-10'>
            <h1 className='py-4 border-2 pl-2 text-4xl  font-medium text-[#2C2052] '>FAQ</h1>
            {
                faqState.map((el, i) => <div key={el.question + i} className='py-5 border-2 border-t-0 pl-2 pr-4'>
                    <div className='flex justify-between items-center  text-l max-md:text-[17px] lg:text-xl  text-[#2C2052] '>
                        <p className='pr-4'>{el.question}</p>
                        <Image className={` cursor-pointer ${el.isOpen ? "rotate-45" : "rotate-90"} transition ease-in-out max-md:h-[17px] max-md:w-[17px]  h-[22px] w-[22px] `} onClick={() => onCloseClick(i)} src={CloseIcon} alt='close icon' width={23} height={23} />
                    </div>
                    {
                        el.isOpen && <div className='mt-3  text-sm'>{el.answer}</div>
                    }
                </div>

                )
            }
        </section>
    )
}

export default Faq