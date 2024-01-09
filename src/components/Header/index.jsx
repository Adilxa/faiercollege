"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../public/svg/Logo.svg"
import { links } from '@/constants/Header'
import Link from 'next/link'
import BurgerIcon from "../../public/svg/Burger.svg";
import CloseIcon from "../../public/svg/close.svg";

function Header() {

    const [burger, setBurger] = useState(false)

    return (
        <header className=' bg-[#2C2052] py-5'>
            <section className='container flex justify-between align-middle items-center'>
                <Image src={Logo} width={200} height={60} alt='Logo' className='max-md:w-[110px]'></Image>

                <div onClick={() => setBurger(true)} className='max-md:block lg:hidden  cursor-pointer p-1'>
                    <Image src={BurgerIcon} width={30} height={30} alt="burger"></Image>
                </div>

                <div
                    className={`${burger ? 'translate-x-0 z-10' : 'translate-x-full z-10'
                        } sidebar fixed top-0 right-0 h-full w-full bg-[#2C2052] text-white p-6 transform transition-transform duration-500 ease-out`}
                >
                    <header className='flex justify-end'>
                        <div onClick={() => setBurger(false)}>
                            <Image src={CloseIcon} width={30} height={30} alt="close"></Image>
                        </div>
                    </header>
                    <div className='flex flex-col gap-2 text-xl'>
                        {
                            links.map((el) => <Link key={el.title} href={el.to}>
                                {el.title}
                            </Link>)
                        }
                    </div>
                </div>
                <div className='navigation text-white   flex text-[24px] gap-7  font-light  max-md:hidden'>
                    {
                        links.map((el) => <Link key={el.title} href={el.to}>
                            {el.title}
                        </Link>)
                    }
                </div>
            </section>
        </header>
    )
}

export default Header