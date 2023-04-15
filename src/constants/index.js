import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wpu,
    valogo,
    flatironschool,
    logo,
    reactr,
    apartmentconnect,
    planetsite,
    dalle,
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},
{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Web Developer",
    icon: web,
},
{
    title: "Frontend Developer",
    icon: mobile,
},
{
    title: "Backend Developer",
    icon: backend,
},
{
    title: "Exercise Scientist",
    icon: creator,
},
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "JavaScript",
    icon: javascript,
},
// {
//     name: "TypeScript",
//     icon: typescript,
// },
{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Redux Toolkit",
    icon: redux,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "MongoDB",
    icon: mongodb,
},
{
    name: "Three JS",
    icon: threejs,
},
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
},
// {
//     name: "docker",
//     icon: docker,
// },
];

const experiences = [
{
    title: "Freelance Web Developer",
    company_name: "Allright Computer Services",
    icon: logo,
    iconBg: "black",
    date: "February 2023 - April 2023",
    points: [
    " Drove customer acquisition by creating a dynamic, mobile friendly website using React and Tailwind CSS.", 
    " Successfully collaborated with the business owner to develop and execute a website design strategy that effectively showcased the company’s offerings and enhanced its online presence. "
        
    ],
},
{
    title: "Software Engineering Student",
    company_name: "Flatiron School",
    icon: flatironschool,
    iconBg: "#383E56",
    date: "September 2022 - January 2023",
    points: [
    "Full-time 15-week program and 500+ hour immersive full-stack software development program",
    "Collaborated on Frontend, Backend, and Full stack group projects with one-week timelines to implement technical knowledge and learn effective communication, leadership, and problem-solving skills",
    "Created a capstone solo Full-Stack application with a three-week timeline demonstrating project planning, idea actualization, and technical practice",
    "Gained proficiency with multiple languages, frameworks, libraries, data structures, algorithms, and technical writing proficiency"
        
    ],
},
{
    title: "Clinical Research Coordinator",
    company_name: "James J. Peter's Bronx VA Medical Center",
    icon: valogo,
    iconBg: "#E6DEDD",
    date: "June 2021 - September 2022",
    points: [
    "Ensured the accuracy and integrity of research data through efficient analysis and management of databases utilized in publishing research papers",
    "Led the execution of clinical research trials centered on spinal cord injury recovery, through innovative experimental sessions."   
    ],
},
{
title: "Graduate Assistant",
company_name: "William Paterson University",
icon: wpu,
iconBg: "lightGray",
date: "September 2019 - May 2021",
points: [
"Instructed undergraduate kinesiology students on laboratory protocols and metabolic testing",
"Conducted ECG screening, Metabolic testing, as well as blood pressure and body composition measurement techniques",
" Maintained exercise testing equipment, scheduled repairs, and ordered supplies for the Human Performance Lab"
],
},
];

const testimonials = [
{
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
    name: "ApartmentConnect",
    description:
    "Full-stack application for apartment tenants, designed to promote a sense of community within residential buildings. Tenants can effortlessly connect and engage with their fellow residents, fostering a friendly and inclusive environment. ",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "postgresql",
        color: "green-text-gradient",
    },
    {
        name: "rubyonrails",
        color: "pink-text-gradient",
    },
    ],
    image: apartmentconnect,
    source_code_link: "https://github.com/Jrobbins973/ApartmentConnect",
},
{
    name: "Dall-E Clone",
    description:
    "Full Stack MERN Application based on OpenAI's Dall-E image generator. Allows users to generate images based on a prompt, using OpenAI's API. Users can then share images to a dashboard and view all of their creations.",
    tags: [
   
    {
        name: "mongodb",
        color: "green-text-gradient",
    },
    {
        name: "next.js",
        color: "pink-text-gradient",
    },
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "express",
        color: "yellow-text-gradient",
    },
    {
        name: "MERN",
        color: "gold-text-gradient",
    },
    ],
    image: dalle,
    source_code_link: "https://github.com/Jrobbins973/Dalle-clone",
},
{
    name: "Planet Showcase",
    description:
    "A captivating, front-end application that presents intriguing insights about the planets in our solar system, designed with an intuitive and user-friendly interface",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "css",
        color: "green-text-gradient",
    },
    ],
    image: planetsite,
    source_code_link: "https://github.com/Jrobbins973/phase-3-front-end-react",
},
];

export { services, technologies, experiences, testimonials, projects };