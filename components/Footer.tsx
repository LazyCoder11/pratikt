import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';

const Footer = () => {
    return (
        <div className='h-full lg:h-[50vh] border-t dark-border px-10 lg:px-60 py-5 lg:py-16'>
            <div className=" h-full flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
                <div className="w-full lg:w-1/2 h-full flex flex-col gap-10 justify-between">
                    <div className='pt-10 flex items-center gap-5'>
                        <Image
                            src="/images/logo.png"
                            width={40}
                            height={35}
                            alt="Picture of the author"
                        />
                        <div className="md:flex lg:hidden flex flex-col">
                            <h4 className='color text-2xl tracking-wider font-normal'>Pratik Trivedi</h4>
                            <p className='tracking-wide text-[#f2f2f27e] text-xl'>Web Designer</p>
                        </div>
                    </div>
                    <div className='pb-10'>
                        <h3 className='text-xl tracking-wide'>© 2024 Pratik Trivedi. All Rights Reserved.</h3>
                        <p className='opacity-50 text-lg tracking-wide'>Made with love and Tea.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full ">
                    <div className="pt-10 lg:float-right">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="w-full lg:w-1/2">
                                <div className="mb-6">
                                    <h4 className='text-xl lg:text-sm tracking-wider text-[#636363] font-semibold'>MAIN</h4>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <Link href="/" className='text-2xl lg:text-lg'>
                                        Work
                                    </Link>
                                    {/* <Link href="/" className='text-lg'>
                                        Info
                                    </Link> */}
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mb-6">
                                    <h4 className='text-xl lg:text-sm tracking-wider text-[#636363] font-semibold'>CONTACT</h4>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <a href="https://www.linkedin.com/in/pratik-trivedi-dev/" target='_blank' className='text-2xl lg:text-lg flex items-center gap-3'>
                                        LinkedIn <RxArrowTopRight />
                                    </a>
                                    <a href="https://drive.google.com/file/d/1tsjV6qcovWAgMnUO4EAIJamhooSozBF-/view?usp=sharing" target='_blank' className='text-2xl lg:text-lg flex items-center gap-3'>
                                        Resume <RxArrowTopRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 float-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
