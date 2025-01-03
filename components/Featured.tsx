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
    const cardRef4 = useRef<HTMLDivElement>(null)
    const cardRef5 = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card1 = cardRef1.current;
        const card2 = cardRef2.current;
        const card3 = cardRef3.current;
        const card4 = cardRef4.current;
        const card5 = cardRef5.current;

        if (card1) {
            gsap.set(card1.querySelector('img'), { translateY: 0, scale: 1, });
            card1.addEventListener('mouseenter', () => {
                gsap.to(card1.querySelector('img'), { translateY: -20, scale: 1.05, duration: 0.5 });
            });
            card1.addEventListener('mouseleave', () => {
                gsap.to(card1.querySelector('img'), { translateY: 0, scale: 1, duration: 0.5 });
            });
        }

        if (card2) {
            gsap.set(card2.querySelector('img'), { translateY: 0, scale: 1, });
            card2.addEventListener('mouseenter', () => {
                gsap.to(card2.querySelector('img'), { translateY: -20, scale: 1.05, duration: 0.5 });
            });
            card2.addEventListener('mouseleave', () => {
                gsap.to(card2.querySelector('img'), { translateY: 0, scale: 1, duration: 0.5 });
            });
        }


        if (card3) {
            gsap.set(card3.querySelector('img'), { scale: 1 });
            card3.addEventListener('mouseenter', () => {
                gsap.to(card3.querySelector('img'), { translateY: -20, scale: 1.05, duration: 0.5 });
            });
            card3.addEventListener('mouseleave', () => {
                gsap.to(card3.querySelector('img'), { translateY: 0, scale: 1, duration: 0.5 });
            });
        }
        if (card4) {
            gsap.set(card4.querySelector('img'), { scale: 1 });
            card4.addEventListener('mouseenter', () => {
                gsap.to(card4.querySelector('img'), { translateY: -20, scale: 1.05, duration: 0.5 });
            });
            card4.addEventListener('mouseleave', () => {
                gsap.to(card4.querySelector('img'), { translateY: 0, scale: 1, duration: 0.5 });
            });
        }
        if (card5) {
            gsap.set(card5.querySelector('img'), { scale: 1 });
            card5.addEventListener('mouseenter', () => {
                gsap.to(card5.querySelector('img'), { translateY: -20, scale: 1.05, duration: 0.5 });
            });
            card5.addEventListener('mouseleave', () => {
                gsap.to(card5.querySelector('img'), { translateY: 0, scale: 1, duration: 0.5 });
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
            if (card3) {
                card3.removeEventListener('mouseenter', () => { });
                card3.removeEventListener('mouseleave', () => { });
            }
            if (card4) {
                card4.removeEventListener('mouseenter', () => { });
                card4.removeEventListener('mouseleave', () => { });
            }
            if (card5) {
                card5.removeEventListener('mouseenter', () => { });
                card5.removeEventListener('mouseleave', () => { });
            }
        }
    }, []);

    return (
        <div className='relative h-full pt-[90px] lg:pt-[150px] px-5 lg:px-60 w-full mb-20' id='featured'>
            <div ref={cardRef1} className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full box-border featured-shadow">
                <HorizontalBorder />
                <a href='https://growyourcorp.com/' target='_blank'>
                    <div className="rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg transition-all duration-1000 hover:bg-gradient-to-b hover:from-[#7814f7] overflow-hidden border dark-border h-full">
                        <ProjectTitle title='Grow Your Corp' desc='Digital Marketing Agency' subDesc='-- built with NextJS, Tailwind, Typescript, Framer Motion' />
                        <ProjectThumbnail url='/images/growyourcorp.png' alt='Grow Your Corp' />
                    </div>
                </a>
            </div>
            <div ref={cardRef2} className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full mt-20 box-border featured-shadow">
                <HorizontalBorder />
                <a href='https://4shan.in/' target='_blank'>
                    <div className="rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg transition-all duration-1000 hover:bg-gradient-to-b hover:from-[#ffda8975] overflow-hidden border dark-border h-full">
                        <ProjectTitle title='4Shan Digital' desc='Management Firm' />
                        <ProjectThumbnail url='/images/4shan.svg' alt='4Shan Digital' />
                    </div>
                </a>
            </div>
            <div ref={cardRef3} className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full box-border mt-20 featured-shadow">
                <HorizontalBorder />
                <a href='https://pkwmediaagency.com/' target='_blank'>
                    <div className="rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg transition-all duration-1000 hover:bg-gradient-to-b hover:from-blue-800 overflow-hidden border dark-border h-full">
                        <ProjectTitle title='PKW Media Agency' desc='Video Editor Portfolio' />
                        <ProjectThumbnail url='/images/pkwmedia.svg' alt='PKW Media Agency' />
                    </div>
                </a>
            </div>
            <div ref={cardRef4} className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full box-border featured-shadow mt-20">
                <HorizontalBorder />
                <a href='https://dot-chi.vercel.app/' target='_blank'>
                    <div className="rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg overflow-hidden border dark-border h-full transition-all duration-1000 hover:bg-gradient-to-b hover:from-gray-700">
                        <ProjectTitle title='Dot' desc='Messanger Web App' subDesc='-- built with NextJS, Tailwind, Redis, Upstash' />
                        <ProjectThumbnail url='/images/dot.svg' alt='Dot' />
                    </div>
                </a>
            </div>
            <div ref={cardRef5} className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full box-border featured-shadow mt-20">
                <HorizontalBorder />
                <a href='https://buzzlrr.com/' target='_blank'>
                    <div className="rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg overflow-hidden border dark-border h-full transition-all duration-1000 hover:bg-gradient-to-b hover:from-gray-700">
                        <ProjectTitle title='Buzzlrr' desc='Digital Content Creator'/>
                        <ProjectThumbnail url='/images/buzzlrr.svg' alt='Buzzlrr' />
                    </div>
                </a>
            </div>
            {/* <div className="flex flex-col justify-center items-center mt-20">
                I charge
                <h2 className='text-3xl'>
                    10$ - 15$ / hour
                </h2>
            </div> */}
        </div>
    )
}

export default Featured
