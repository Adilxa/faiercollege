"use client"
import React from 'react';
import { ApplyBlogsArray } from '@/constants/ApllyBlogs';
import Image from 'next/image';

function ApplyBlogs() {
    return (
        <section className='container flex flex-col gap-5 mb-10'>
            {
                ApplyBlogsArray.map((el, i) => (
                    <div key={el + i} className=' border-2 p-5  border-[#2C2052]'>
                        <div className={`flex justify-between gap-5 max-md:flex-col ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-6/12 ${i % 2 === 0 ? 'order-1' : 'order-2'} max-md:w-full`}>
                                <h1 className='border-b border-[#2C2052] text-3xl mb-3 font-medium max-md:text-xl'>{el.title}</h1>
                                <p className='text-xl mb-1 max-md:text-lg'>{el.text}</p>
                                {el?.descripton && (
                                    <div className='border-t border-[#2C2052] pl-3 pt-1'>
                                        {el.descripton.map((item, index) => (
                                            <li className='text-lg text-[#2C2052] max-md:text-base' key={index}>{item}</li>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Image className='w-6/12 object-cover h-6/12 max-md:w-full' alt='image' src={el.image} />
                        </div>

                        <div className='flex items-center py-2'>
                            <a className='text-xl text-[#2C2052]' href="">LEARN MORE {">"} </a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ApplyBlogs