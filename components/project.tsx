"use client"
import {links, projectsData} from "@/lib/data";
import React, {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {motion} from "framer-motion";
import {FaGithubSquare, FaGlobe} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";

interface ProjectProps {
    title: string;
    description: string;
    tags: readonly string[]; // Accept readonly array
    imageUrl: StaticImageData;
    linkUrl: string;
    linkWebsite?: string; // Making linkWebsite optional
}


export default function Project({title, description, tags, imageUrl,linkUrl,linkWebsite}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress= useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityProgress= useTransform(scrollYProgress,[0,1],[0.3,1])
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        className="group p-2 mb-3 sm:mb-8 last:mb-0 transition">
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden
             sm:pr-8 relative sm:h-[21rem]
             hover:bg-gray-200 transition sm:group-even:pl-8
             dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
      flex flex-col h-full sm:group-even:ml-[18rem]">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <div className="flex flex-col gap-2"> {/* Container for icons */}
                        <a className="text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
            focus:scale-110
            hover:scale-[1.15]
            hover:text-gray-950
            active:scale-105
            transition
            cursor-pointer  dark:bg-white/10 dark:text-white/60" href={linkUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare />
                        </a>
                        {linkWebsite && (
                            <a className="text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
        focus:scale-110
        hover:scale-[1.15]
        hover:text-gray-950
        active:scale-105
        transition
        cursor-pointer  dark:bg-white/10 dark:text-white/60" href={linkWebsite} target="_blank" rel="noopener noreferrer">
                                <FaGlobe />
                            </a>
                        )}
                    </div>
                </div>


                <p className="mb-3 pr-3 mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                             rounded-full dark:text-white/70"
                                key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt="Project I worked on"
                       quality={95} className="absolute hidden sm:block top-12 -right-40 w-[28.25rem]
        rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40
         transition
         group-hover:-translate-x-3
          group-hover:translate-y-3
         group-hover:-rotate-2
         group-even:group-hover:translate-x-3
         group-even:group-hover:translate-y-3
         group-even:group-hover:rotate-2

         group-hover:scale-[1.04]

         "/>
            </section>
        </motion.div>)
}
