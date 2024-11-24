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
import todo from "@/public/todo1.png";
import workerManger from "@/public/workerManger.png";
 import Neural_Networks from "@/public/Neural_Networks.png";
import KMeans_PCA from "@/public/KMeans_PCA.png";
import aa from "@/public/aa.png";
import jsMentor from "@/public/jsMentor.png";
import Portfolio from "@/public/portfoliwise.png";
import checkersImage from "@/public/checkers.png";

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
        title: "PortfoliWise",
        description: "PortfoliWise is a financial portfolio app that consolidates portfolios from multiple brokers in one place, featuring real-time stock data, portfolio analysis, and ML predictions.",
        tags: ["React", "Node.js", "MongoDB", "Express", "ML", "API"],
        imageUrl: Portfolio,
        linkUrl: "https://github.com/guyreuveni33/final_project.git",
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
        title: "Web Chat",
        description:
            "Designed a dynamic web chat application using React, Java, MongoDB, and Node.js for seamless integration and optimal performance.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Bootstrap", "AP 2"],
        imageUrl: whatsapp,
        linkUrl: "https://github.com/guyreuveni33/WhatsappAP2023",
    },


    {
        title: "Checkers Game",
        description:
            "Developed a multiplayer checkers game using React, .NET C#, and Socket.io, featuring real-time gameplay and synchronized moves across tabs.",
        tags: ["React", ".NET C#", "Socket.io", "WebSocket", "Game Development"],
        imageUrl: checkersImage, // replace `checkersImage` with the actual image variable or path
        linkUrl: "https://github.com/guyreuveni33/Checkers.git",
    },

    {
        title: "Javascript Mentor",
        description: "A real-time coding collaboration platform where mentors guide students through exercises, provide instant feedback. Built with React, Node.js, and Socket.IO.",

        tags: ["React", "Node.js", "JavaScript", "CSS", "HTML", "Socket.io"],
        imageUrl: jsMentor,
        linkUrl: "https://github.com/guyreuveni33/MentorCodeSpace.git",
        linkWebsite: "https://mentor-code-space.vercel.app/",

    },



    {
        title: "Neural Networks - NumPy and PyTorch",
        description: "Built neural networks for digit and fashion classification using NumPy and PyTorch, with MLP and CNN models on MNIST & FashionMNIST.",
        tags: ["Python", "NumPy", "PyTorch", "CNN", "Machine Learning"],
        imageUrl: Neural_Networks,
        linkUrl: "https://github.com/guyreuveni33/Neural-Networks-NumPy-PyTorch"
    },

    {
        title: "Dynamic Dictionary",
        description:
            "Multilingual dictionary in C using dynamic allocation and linked lists. Supports file handling, word management, and operations like adding, searching, deleting, and sorting.",
        tags: ["C", "Dynamic Allocation", "File Handling", "Data Structures"],
        imageUrl: aa,
        linkUrl: "https://github.com/guyreuveni33/Dynamic-Dictionary",

    },
    {
        title: "Todo-List App",
        description:
            "Created a Todo-List app with a React frontend and C# backend using .NET 8.0 and SQL. Users can add, edit, delete, and prioritize tasks seamlessly.",
        tags: ["C#", "React","SQL", "Client-Server", ".NET 8.0", "REST API" ],
        imageUrl: todo,
        linkUrl: "https://github.com/guyreuveni33/ToDoApp.git",

    },


    {
        title: "K-Means and PCA Implementation",
        description: "Developed K-Means clustering and PCA algorithms with NumPy, clustering a synthetic dataset and reducing MNIST's dimensionality.",
        tags: ["Python", "NumPy", "K-Means", "PCA", "Machine Learning"],
        imageUrl: KMeans_PCA,
        linkUrl: "https://github.com/guyreuveni33/KMeans-PCA-Implementation"
    },

    {
        title: "Worker Manager",
        description:
            "Developed a system for managing workers with features for adding, editing, deleting, and filtering records, including dynamic sorting and role-based filtering.",
        tags: ["React", "Node.js", "JavaScript", "REST API", "MongoDB", "Express"],
        imageUrl: workerManger, // Replace with the actual image file path or URL
        linkUrl: "https://github.com/guyreuveni33/Worker-Manger.git",
    }, {
        title: "Currency Converter",
        description:
            "A currency converter app that allows users to convert between currencies using the ExchangeRate - API. Give it a try by the website icon!",
        tags: ["React", "JavaScript", "CSS", "API Integration", "HTML"],
        imageUrl: currency,
        linkUrl: "https://github.com/guyreuveni33/Currency-Converter.git",
        linkWebsite: "https://currencyconverterguy.vercel.app/",
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

    }, {
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
    "Machine Learning",
    "Neural Networks",
    "NumPy",
    "PyTorch",
] as const;