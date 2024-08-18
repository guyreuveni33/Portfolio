import React from "react";
import {FaBook, FaChalkboard, FaHeadphones} from "react-icons/fa";
import {LuShield} from "react-icons/lu";
import arkanoidImg from "@/public/arkanoid.png";
import whatsapp from "@/public/Whatsapp.png";
import KNN from "@/public/KNN.png";
import Pstring from "@/public/pstring4.png";
import dic from "@/public/dic.png";
import BFS from "@/public/BFS.webp";
import android from "@/public/android.png";
import ticTacToe from "@/public/ticTacToe.png";
import currency from "@/public/currency.png";
import todo from "@/public/todo.png";
import workerManger from "@/public/workerManger.png";
import {StaticImageData} from "next/image";

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
] as const
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
    {
        title: "Part-Time Teacher Assistant",
        location: "Cet (center for educational technology), Ramat Gan",
        description:
            "As a part-time Teacher Assistant at cet, I guide high school students in" +
            "the Scientific-Technological Reserve program, focusing on Python" +
            "programming to bolster their skills in mathematics, sciences, and " +
            "computing.",
        icon: React.createElement(FaChalkboard),
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
        linkUrl: "https://github.com/guyreuveni33/WhatsappAP2023",
    },
    {
        title: "Tic Tac Toe",
        description: "Developed a versatile Tic Tac Toe game featuring multiple difficulty levels and a two-player mode. Try the game by the website icon!",
        tags: ["Python", "Flask", "JavaScript", "CSS", "HTML", "Docker"],
        imageUrl: ticTacToe,
        linkUrl: "https://github.com/guyreuveni33/TicTacToe.git",
        linkWebsite: "https://tictactoguyreuveni.vercel.app/",

    },
    {
        title: "Currency Converter",
        description:
            "A currency converter app that allows users to convert between currencies using the ExchangeRate - API. Give it a try by the website icon!",
        tags: ["React", "JavaScript", "CSS", "API Integration", "HTML"],
        imageUrl: currency,
        linkUrl: "https://github.com/guyreuveni33/Currency-Converter.git",
        linkWebsite: "https://currencyconverterguy.vercel.app/",
    },

    {
        title: "Todo-List App",
        description:
            "Created a Todo-List app with a React frontend and C# backend using .NET 8.0 and MongoDB. Users can add, edit, delete, and prioritize tasks seamlessly.",
        tags: ["C#", "React","Client-Server",".NET 8.0","REST API" ,"MongoDB"],
        imageUrl: todo,
        linkUrl: "https://github.com/guyreuveni33/ToDoApp.git",

    },




    {
        title: "Vector Classifier",
        description:
            "Created a Vector Classifier project in C++ employing the KNN algorithm and a multi-threading server-client connection for efficient vector classification.",
        tags: ["C++", "Multi-Threading", "Algorithm", "SocketIO", "AP 1"],
        imageUrl: KNN,
        linkUrl: "https://github.com/guyreuveni33/Vector-Classifier",

    },
    {
        title: "Worker Manager",
        description:
            "Built a Worker Management System using React for the frontend and Koa.js for the backend. This application allows administrators to manage workers by adding, editing, deleting, and filtering user records. The system supports dynamic sorting, role-based filtering, and a modal-based user interface for managing worker data.",
        tags: ["React", "Koa.js", "User Management", "CRUD", "JavaScript", "REST API", "Hooks"],
        imageUrl: workerManger, // Replace with the actual image file path or URL
        linkUrl: "https://github.com/yourusername/WorkerManager.git",
    },
    {
        title: "Dynamic Dictionary",
        description:
            " A dynamic dictionary implemented in C, using dynamic allocation and linked lists to manage the dictionary.",
        tags: ["C", "Dynamic Allocation", "Computer science Introduction"],
        imageUrl: dic,
        linkUrl: "https://github.com/guyreuveni33/Dynamic-Dictionary",

    },
    {
        title: "Break Breaker - Arkanoid",
        description:
            "OOP project: A modern twist on the classic Arkanoid game. Experience nostalgia with user-friendly levels of increasing difficulty.",
        tags: ["Java", "Design Pattern", "OOP"],
        imageUrl: arkanoidImg,
        linkUrl: "https://github.com/guyreuveni33/Arkanoid-BreakBreaker",

    },

    {
        title: "P String Library",
        description:
            "Assembly language library functions designed for working with Pstrings in a manner analogous to the string.h library in the C language.",
        tags: ["Assembly", "Linux"],
        imageUrl: Pstring,
        linkUrl: "https://github.com/guyreuveni33/Pstring",

    },


    {
        title: "Android Web Chat",
        description:
            "Android Web Chat is a cutting-edge mobile app crafted in Android Studio, offering a smooth and responsive chatting experience.",
        tags: ["Android Development", "Java", "AP 2", "MongoDB", "Node.js"],
        imageUrl: android,
        linkUrl: "https://github.com/guyreuveni33/WhatsappAP2023/tree/main/MyApplication",
    },
    {
        title: "Parallel BFS",
        description:
            "A parallel implementation of the BFS algorithm in C using ThreadsPool for efficient graph traversal.",
        tags: ["C", "ThreadPool", "Parallel Computing", "Algorithm"],
        imageUrl: BFS,
        linkUrl: "https://github.com/guyreuveni33/Parallel-BFS",

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
    "OOP",
    "Flask",
    "Figma",
    "Docker",
    "Android Development",
    "Assembly",
    "Data Structures",
    "Design Patterns",
    "Algorithms",
] as const;