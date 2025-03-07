import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { ul } from "framer-motion/client";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ujjawal Patel",
  greet: "Hello there! 👋🏻",
  description:
    "I am a software developer deeply interested in AI/ML, I envision harnessing these transformative technologies to solve real-world problems.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/ujju26/personal_website",
  },
  {
    id: 2,
    name: "Volume Control using Hand Gesture Recognition",
    description:
      "Developed a hand gesture-based volume control system using Python, OpenCV, MediaPipe, and NumPy. Leveraged real-time hand tracking to adjust volume based on thumb and index finger distance, with visual feedback via OpenCV. Delivered a functional prototype, showcasing expertise in computer vision and AI solutions.",
    image: projectImage2,
    githubLink: "https://github.com/ujju26/Volume-Control-using-Hand-Getsure-Recognition",
  },
  {
    id: 3,
    name: "Voice Assistant",
    description:
      "Developed a Python-based voice assistant with capabilities such as web browsing, task management, and music playback. Integrated speech recognition and pyttsx3 for real-time interaction, along with automation features like Google search, Wikipedia summaries, and task notifications to enhance productivity.",
    image: projectImage3,
    githubLink: "https://github.com/ujju26/voice-assistant",
  },
  {
    id: 4,
    name: "Eye Controlling Mouse",
    description:
      "This project enables hands-free mouse control using eye movements by leveraging OpenCV, MediaPipe FaceMesh, and PyAutoGUI. It tracks eye landmarks in real-time, moves the cursor based on eye position, and detects intentional blinks to trigger clicks, providing an intuitive and accessible way to interact with a computer.",
    image: projectImage4,
    githubLink: "https://github.com/ujju26/Eye-Controoling-Mouse",
  },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "I studied Information Technology at the Shantilal Shah Government Engineering College, from which I graduated in June,2024.",
  "Currently I am pursuing my Machine Learning course from Udemy.",
  "I am aspiring software developer actively looking for a full-time entry level position."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  // {
  //   icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
  //   name: "Next.js",
  //   experience: "1+ year",
  // },
  {
    name: "Python",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "HTML",
  },
  // {
  //   icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "MongoDB",
  //   experience: "1.5+ years",
  // },
  // {
  //   icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
  //   name: "Redis",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "Node.js",
  //   experience: "2+ years",
  // },
  // {
  //   icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
  //   name: "PostgreSQL",
  //   experience: "1+ year",
  // },
];

export const EXPERIENCES = [
  {
    title: "Internship",
    company: "Script India",
    duration: "January 2024 - April 2024",
    description:
      <ul>
        <li>• Developed and designed a full-stack Complaint Management System to streamline issue reporting and resolution processes.</li>
        <li>• Engineered a robust backend architecture using C-Sharp/Asp.net, enhancing system reliability and performance. Moreover, a normalized SQL database was developed to manage large datasets effectively, ensuring data integrity and swift retrieval.</li>
        <li>• Created DFD (Data flow Diagram) and User Case diagram for the data using EdrawMax, ensuring clear and comprehensive documentation of data elements.</li>
        <li>• Adhered to industry best practices for software design and development, focusing on scalability, maintainability, and performance optimization.</li>
      </ul>, 
  },
  {
    title: "Internship",
    company: "Script India",
    duration: "27 July 2023 - 10 August 2023",
    description:
      "Worked on Python as intern for 2 weeks. Worked on Hand Gesture Recognition using modules like pyautogui, cv2 and mediapipe. ",
  },
];

export const EDUCATION = [
  {
    degree: "Machine Learning Course",
    institution: "Udemy (Online Course)",
    duration: "October 2024 - Present",
    description:
      "This Machine Learning course has covered all topic by the Instructor and the course is packed with practical exercises that are based on real-life case studies.",
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Shantilal Shah Government Engineering College, Bhavnagar",
    duration: "November 2020 - June 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform.",
  },
  // {
  //   degree: "12th - Gujarat Higher Secondary Education Board",
  //   institution: "Shree Swaminarayan English Medium School, Vapi",
  //   duration: "April 2019 - March 2020",
  //   description:
  //     "",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://facebook.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://discord.com/ujju_26",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://instagram.com/ujju_26_",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/ujju26",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ujjawal-patel-5b8a07249/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
