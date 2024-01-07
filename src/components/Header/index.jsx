import Image from 'next/image'
import React from 'react'
import Logo from "../../public/svg/Logo.svg"
import { links } from '@/constants/Header'
import Link from 'next/link'

function Header() {
    return (
        <header className=' bg-[#2C2052] py-5'>
            <section className='container flex justify-between align-middle items-center'>
                <Image src={Logo} width={200} height={60} alt='Logo'></Image>
                <div className='navigation text-white  flex text-[24px] gap-5 font-light'>
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