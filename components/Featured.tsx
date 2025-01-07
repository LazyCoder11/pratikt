"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HorizontalBorder from "./ui/HorizontalBorder";
import ProjectTitle from "./ui/ProjectTitle";
import ProjectThumbnail from "./ui/ProjectThumbnail";
import { projects } from "@/utils/data";

const Featured = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cardRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null));

    useEffect(() => {
        const handleAnimation = (card: HTMLDivElement | null) => {
            if (!card) return;

            const image = card.querySelector("img");
            if (!image) return;

            gsap.set(image, { translateY: 0, scale: 1 });

            const handleMouseEnter = () => {
                gsap.to(image, { translateY: -20, scale: 1.05, duration: 0.5 });
            };

            const handleMouseLeave = () => {
                gsap.to(image, { translateY: 0, scale: 1, duration: 0.5 });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        const cleanups = cardRefs.map(ref => handleAnimation(ref.current));

        return () => cleanups.forEach(cleanup => cleanup && cleanup());
    }, [cardRefs]);



    return (
        <div className="relative h-full pt-[90px] lg:pt-[150px] px-5 lg:px-60 w-full mb-20" id="featured">
            {projects.map((project, index) => (
                <div
                    key={index}
                    ref={cardRefs[index]}
                    className="relative overflow-hidden rounded-3xl border dark-border p-2 md:p-3 w-full h-full mt-20 box-border featured-shadow"
                >
                    <HorizontalBorder />
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <div
                            className={`rounded-2xl p-3 md:p-10 flex flex-col relative featured-bg transition-all duration-1000 ${project.bgClass} overflow-hidden border dark-border h-full`}
                        >
                            <ProjectTitle
                                title={project.title}
                                desc={project.desc}
                                subDesc={project.subDesc}
                            />
                            <ProjectThumbnail url={project.imageUrl} alt={project.title} />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Featured;
