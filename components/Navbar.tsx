import React, { useEffect, useRef } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { CgArrowTopRight } from 'react-icons/cg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navbarRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef(null);
    const contactRef = useRef(null);
    const link1Ref = useRef(null);
    const link2Ref = useRef(null);

    useEffect(() => {
        const navbar = navbarRef.current;
        const logo = logoRef.current;
        const links = linksRef.current;
        const contact = contactRef.current;
        const link1 = link1Ref.current;
        const link2 = link2Ref.current;

        gsap.set([logo, links, contact], {
            y: -50,
            opacity: 0
        });

        gsap.to(navbar, {
            opacity: 1,
            duration: 0.5,
        });

        gsap.to([logo, links, contact], {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power2.in"
        });
    }, []);

    return (
        <div ref={navbarRef} className='navbar fixed flex items-center top-0 left-0 w-full z-10 h-[130px] bg-gradient-to-b from-[#000000b3] to-[#10101000]'>
            <div className="flex justify-between items-center px-10 my-4 w-full">
                <div ref={logoRef} className="flex gap-5 items-center">
                    <Image
                        src="/images/logo.png"
                        width={30}
                        height={25}
                        alt="Picture of the author"
                    />
                    <div className="md:flex flex-col hidden">
                        <h4 className='color text-xl tracking-wider font-normal'>Pratik Trivedi</h4>
                        <p className='tracking-wide text-[#f2f2f27e] text-lg'>Web Designer</p>
                    </div>
                </div>
                <div ref={linksRef} className="relative flex h-10 items-center py-6 px-2 justify-between gap-3 rounded-full backdrop-blur-3xl nav-pill-shadow border border-[#f2f2f20d] bg-[#f2f2f20d]">
                    <div className="absolute -top-0 left-[30px] w-10 h-1 rounded-full bg-[#f2f2f2] nav-indicator-glow"></div>
                    <Link
                        href='/app/page.tsx'
                        className='active px-6 py-2 active:bg-[#404040] hover:bg-gradient-to-r from-transparent to-[#f2f2f20d] rounded-full'
                    >
                        Work
                    </Link>
                    {/* <Link
                        href="/"
                        className='px-6 py-2 active:bg-[#404040] hover:bg-gradient-to-r from-transparent to-[#f2f2f20d] rounded-full'
                    >
                        Info
                    </Link> */}
                </div>
                <div ref={contactRef} className="md:flex hidden items-center">
                    <a  ref={link1Ref}
                        href="https://www.linkedin.com/in/pratik-trivedi-dev/" target='_blank'
                        className='hover:bg-[#f2f2f20d] px-5 py-2 rounded-full text-lg flex items-center gap-2 transition-all'
                    >
                        LinkedIn <CgArrowTopRight size={20} />
                    </a>
                    <a  ref={link2Ref}
                        href="https://drive.google.com/file/d/1tsjV6qcovWAgMnUO4EAIJamhooSozBF-/view?usp=sharing" target='_blank'
                        className='hover:bg-[#f2f2f20d] px-5 py-2 rounded-full text-lg flex items-center gap-2 transition-all'
                    >
                        Resume <CgArrowTopRight size={20} />
                    </a>
                </div>
            </div>
            {/* <div className="hamburger">
                <div></div>
                <div></div>
            </div> */}
        </div>
    )
}

export default Navbar;