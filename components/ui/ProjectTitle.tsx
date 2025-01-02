"use client";

import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi'

interface ProjectDetails {
    title: string,
    desc: string,
    subDesc?: string,
}

const ProjectTitle: FC<ProjectDetails> = ({
    title,
    desc,
    subDesc
}) => {
    const titleRef = useRef(null)
    const descRef = useRef(null)

    useEffect(() => {
        const title1 = titleRef.current
        const description = descRef.current

        if (title1 && description) {
            gsap.set([title1, description], {
                opacity: 0,
            });

            // Create a ScrollTrigger animation
            gsap.to([title1, description], {
                scrollTrigger: {
                    trigger: title1,
                    start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
                    toggleActions: "play none none none", // Play animation on enter, don't reset on leave
                },
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                ease: "power4.in",
            });
        }
    }, []);

    return (
        <div className="flex justify-between">
            <div className=''>
                <h3 ref={titleRef} className='text-2xl md:text-3xl font-medium tracking-wide project-shadow'>{title}</h3>
                <p ref={descRef} className='text-[#f2f2f2cc] font-medium text-lg md:text-xl mt-0 lg:mt-0'>{desc} <span className='text-gray-500'>{subDesc}</span></p>
            </div>
            <div className="">
                <FiArrowRight size={35} />
            </div>
        </div>
    )
}

export default ProjectTitle
