import React from "react";
import {FaBook, FaHeadphones} from "react-icons/fa";
import {LuShield} from "react-icons/lu";
import arkanoidImg from "@/public/arkanoid.png";
import whatsapp from "@/public/Whatsapp.png";
import KNN from "@/public/KNN.png";
import Pstring from "@/public/pstring4.png";
import dic from "@/public/dic.png";
import android from "@/public/android.png";
 export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Deputy of The Head Of Section - Bnei Hayeshivot",
        location: "The recruiting office,Tel Hashomer",
        description:
        "In my role I assisted the head of the section in leading the recruitment efforts. I filled \n" +
            "Officer position, command and management of a department of about 30" +
            "Soldiers, managing administrative tasks, conducting candidate evaluations,\n" +
            "and optimization of the recruitment procedures",
        icon: React.createElement(LuShield),
        date: "2019-2021",
    },
    {
        title: "Computer Science Student",
        location: "Bar Ilan University, Ramat Gan",
        description:
        "Directly after my army service, I started learning Computer Science at Bar Ilan University, realizing a long-held dream. Diligently tackling assignments, conquering projects, and embracing new tools everyday",
        icon: React.createElement(FaBook),
        date: "2021 - 2024",
    },
    {
        title: "IT Support Tomax Testing",
        location: "Bar Ilan University, Ramat Gan",
        description:
        "As IT Support at Tomax Testing, I ensure a smooth and secure remote testing experience. Expertly tackling technical challenges, I provide invaluable support for navigating the intricacies of the process.",
        icon: React.createElement(FaHeadphones),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Web Chat",
        description:
            "Designed a dynamic web chat application using React, Java, MongoDB, and Node.js for seamless integration and optimal performance.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Bootstrap", "AP 2"],
        imageUrl: whatsapp,
        linkUrl:"https://github.com/guyreuveni33/WhatsappAP2023",
    },
    {
        title: "Break Breaker - Arkanoid",
        description:
            "OOP project: A modern twist on the classic Arkanoid game. Experience nostalgia with user-friendly levels of increasing difficulty.",
        tags: ["Java", "Design Pattern", "OOP"],
        imageUrl: arkanoidImg,
        linkUrl:"https://github.com/guyreuveni33/Arkanoid-BreakBreaker",

    },
    {
        title: "Vector Classifier",
        description:
            "Created a Vector Classifier project in C++ employing the KNN algorithm and a multi-threading server-client connection for efficient vector classification.",
        tags: ["C++", "Multi-Threading", "Algorithm", "SocketIO", "AP 1"],
        imageUrl: KNN,
        linkUrl:"https://github.com/guyreuveni33/Vector-Classifier",
    },

    {
        title: "P String Library",
        description:
            "Assembly language library functions designed for working with Pstrings in a manner analogous to the string.h library in the C language.",
        tags: ["Assembly", "Linux"],
        imageUrl: Pstring,
        linkUrl:"https://github.com/guyreuveni33/Pstring",

    },
    {
        title: "Dinamically Sized Dictionary",
        description:
            " A dynamic dictionary implemented in C, using dynamic allocation and linked lists to manage the dictionary.",
        tags: ["C", "Dynamic Allocation", "Computer science Introduction"],
        imageUrl: dic,
        linkUrl:"https://github.com/guyreuveni33/Dynamic-Dictionary",
    },
    {
        title: "Android Web Chat",
        description:
            "Android Web Chat is a cutting-edge mobile app crafted in Android Studio, offering a smooth and responsive chatting experience.",
        tags: ["Android Development", "Java", "AP 2","MongoDB","Node.js"],
        imageUrl: android,
        linkUrl:"https://github.com/guyreuveni33/WhatsappAP2023/tree/main/MyApplication",
    },
] as const;

export const skillsData = [
    "C",
    "C++",
    "JAVA",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "SQL",
    "Python",
    "Bootsrap",
    "C#",
    "Android Development",
    "Assembly",
    "OOP",
    "Data Structures",
    "Design Patterns",
    "Algorithms",
] as const;