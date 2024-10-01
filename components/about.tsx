"use client"
import React from 'react'
import SectionHeading from "@/components/sectionHeading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("About");
    return (
        <motion.section
            ref={ref}
            className="text-center mb-28 max-w-[45rem] scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                Dedicated software developer with a results-oriented mindset, driven by a
                passion for creative problem-solving and innovation. I bring hands-on experience in crafting robust web
                applications.{" "}<span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is {" "}
                <span className="font-medium"> React, Node.js, Python, Javascript ,C ,C# and MongoDB. </span>

                Known for my strong collaborative spirit, I leverage excellent communication
                skills to work seamlessly within cross-functional teams. {" "} Currently pursuing a degree, I am actively seeking a <span className="font-medium"> full/part time position</span>
                {" "}to
                contribute to real-world projects while advancing my studies at the university.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing video
                games, watching movies, and hitting the gym. Additionally, I am fueled by a
                passion for continuous learning and exploring new technologies.
            </p>

        </motion.section>
    )
}
