"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from "next/image"
import HorizontalBorder from './ui/HorizontalBorder'
import ProjectTitle from './ui/ProjectTitle'
import ProjectThumbnail from './ui/ProjectThumbnail';

const Featured = () => {
    const cardRef1 = useRef<HTMLDivElement>(null)
    const cardRef2 = useRef<HTMLDivElement>(null)
    const cardRef3 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card1 = cardRef1.current;
        const card2 = cardRef2.current;
        const card3 = cardRef3.current;

        if (card1) {
            gsap.set(card1.querySelector('img'), { scale: 1 });
            card1.addEventListener('mouseenter', () => {
                gsap.to(card1.querySelector('img'), { scale: 1.05, duration: 0.5 });
            });
            card1.addEventListener('mouseleave', () => {
                gsap.to(card1.querySelector('img'), { scale: 1, duration: 0.5 });
            });
        }

        if (card2) {
            gsap.set(card2.querySelector('img'), { scale: 1 });
            card2.addEventListener('mouseenter', () => {
                gsap.to(card2.querySelector('img'), { scale: 1.05, duration: 0.5 });
            });
            card2.addEventListener('mouseleave', () => {
                gsap.to(card2.querySelector('img'), { scale: 1, duration: 0.5 });
            });
        }


        if (card3) {
            gsap.set(card3.querySelector('img'), { scale: 1 });
            card3.addEventListener('mouseenter', () => {
                gsap.to(card3.querySelector('img'), { scale: 1.05, duration: 0.5 });
            });
            card3.addEventListener('mouseleave', () => {
                gsap.to(card3.querySelector('img'), { scale: 1, duration: 0.5 });
            });
        }


        // Cleanup event listeners on unmount
        return () => {
            if (card1) {
                card1.removeEventListener('mouseenter', () => { });
                card1.removeEventListener('mouseleave', () => { });
            }
            if (card2) {
                card2.removeEventListener('mouseenter', () => { });
                card2.removeEventListener('mouseleave', () => { });
            }
        }
    }, []);




    return (
        <div className='relative h-fulln pt-[90px] lg:pt-[150px] px-5 lg:px-60 w-full mb-40' id='featured'>
            <div ref={cardRef1} className="relative overflow-hidden rounded-3xl border dark-border p-3 w-full h-full box-border featured-shadow">
                <HorizontalBorder />
                <a href='https://pkwmediaagency.com/'>
                    <div className="rounded-2xl p-10 flex flex-col relative featured-bg transition-all duration-1000 hover:bg-gradient-to-b hover:from-blue-800 overflow-hidden border dark-border h-full">
                        <ProjectTitle title='PKW Media Agency' desc='Video Editor Portfolio' />
                        <ProjectThumbnail url='/images/pkwmedia.svg' alt='PKW Media Agency' />
                    </div>
                </a>
            </div>
            <div ref={cardRef2} className="relative overflow-hidden rounded-3xl border dark-border p-3 w-full h-full box-border featured-shadow mt-20">
                <HorizontalBorder />
                <a href='https://dot-chi.vercel.app/'>
                    <div className="rounded-2xl p-10 flex flex-col relative featured-bg overflow-hidden border dark-border h-full transition-all duration-1000 hover:bg-gradient-to-b hover:from-gray-700">
                        <ProjectTitle title='Dot' desc='Messanger Web App' subDesc='-- built with NextJS, Tailwind, Redis, Upstash' />
                        <ProjectThumbnail url='/images/dot.svg' alt='Dot' />
                    </div>
                </a>
            </div>
            <div ref={cardRef3} className="relative overflow-hidden rounded-3xl border dark-border p-3 w-full h-full box-border featured-shadow mt-20">
                <HorizontalBorder />
                <a href='https://buzzlrr.com/'>
                    <div className="rounded-2xl p-10 flex flex-col relative featured-bg overflow-hidden border dark-border h-full transition-all duration-1000 hover:bg-gradient-to-b hover:from-gray-700">
                        <ProjectTitle title='Buzzlrr' desc='Digital Content Creator'/>
                        <ProjectThumbnail url='/images/buzzlrr.svg' alt='Buzzlrr' />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Featured
