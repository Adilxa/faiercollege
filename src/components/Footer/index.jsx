import React from 'react'
import Image from 'next/image'
import FooterLogo from "../../public/svg/FooterLogo.svg"
import { Leftlinks, Rightlinks } from '@/constants/Footer'
import Facebook from "../../public/svg/Facebook.svg";
import Instagram from "../../public/svg/Instagram.svg";

function Footer() {
    return (
        <>
            <footer id='footer' className='bg-[#2C2052] py-5'>
                <section className='container flex justify-between items-center max-lg:flex-wrap-reverse max-lg:gap-10'>
                    <nav className='navigation flex items-center gap-10 h-full max-md:items-start max-lg:w-full max-lg:justify-between'>
                        <div className='flex flex-col h-max gap-7'>
                            <Image className='pl-5 max-md:w-[150px]' src={FooterLogo} alt='footer logo' />
                            <div className='flex flex-col text-white font-light  text-[20px] py-2 gap-2 border-l-2 pl-4 max-md:text-sm'>
                                {
                                    Leftlinks.map((el, i) => (
                                        <a key={el.title + i} href={el.to}>{el.title}</a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col h-max gap-7'>
                            <div className='flex items-center gap-5 pl-5'>
                                <Image className='max-md:w-[40px]' src={Facebook} alt='facebook' />
                                <Image className='max-md:w-[40px]' src={Instagram} alt='instagram' />
                            </div>
                            <div className='flex flex-col text-white font-light text-[20px] py-2 gap-2 border-l-2 pl-4 max-md:text-sm'>
                                {
                                    Rightlinks.map((el, i) => (
                                        <a key={el.title + i} href={el.to}>{el.title}</a>
                                    ))
                                }
                            </div>
                        </div>
                    </nav>

                    <div className='contact h-full flex flex-col gap-5 w-5/12 max-lg:w-full'>
                        <h1 className=' text-4xl text-white '>CONTACT</h1>
                        <input className='p-4 border-2 text-white bg-[#2C2052] border-white outline-none' type="text" placeholder={"FULL NAME*"} />
                        <input className='p-4 border-2 text-white bg-[#2C2052] border-white outline-none' type="text" placeholder={"EMAIL ADDRESS*"} />
                        <input className='p-4 border-2 text-white bg-[#2C2052] border-white outline-none' type="text" placeholder={"PHONE*"} />
                        <button className='p-4 border-2 text-[#2C2052] bg-white border-white outline-none'>SUBMIT</button>
                    </div>
                </section>
            </footer>
            <section className='py-4 container text-[#2C2052] '>
                <p className='mb-1 max-md:text-[14px]'>2020 ©  Paier College, Inc. All Rights Reserved.</p>
                <p className=' leading-none max-md:text-[14px]'>
                    <b>84 Iranistan Avenue Bridgeport, CT 06604</b>
                    (203) 287-3031 | <br /> admissions@paier.edu
                </p>
            </section>
        </>
    )
}

export default Footer