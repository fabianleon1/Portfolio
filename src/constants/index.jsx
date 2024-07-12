import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am passionate about starting in the world of software development, using best practices I like to immerse myself in the development of scalable applications. I developed a taste for front-end and back-end technologies. I would also like to work with a development team to share ideas, cultures and quality time to improve as a person and as a software developer.`;

export const ABOUT_TEXT = `Graduated from computer systems engineering with a taste for technical support, networking and helping end users, I would like to transition into software development to develop my skills and continue learning about new technologies and best practices.`;

export const EXPERIENCES = [
  {
    year: "2024 March - Present",
    role: "IT Support",
    company: "Grupo Valsabi",
    description: `I offer technical support services to end users, installation of hardware, software, networks, computer equipment maintenance.  I also offer suggestions for the correct use of equipment in general.`,
    technologies: ["Maintanmance", "Software", "Network", "IT Support"],
  },
  {
    year: "2023 January - 2023 September",
    role: "IT Support",
    company: "IMO Puerto Vallarta",
    description: `My day to day work was based on the installation of an operating system to all the computers in the hotel, install software for the use of each department and also the installation of the same equipment in the workplaces.`,
    technologies: ["Microsoft", "Software", "Windows 10", "Microsoft Office"],
  },
 
];

export const PROJECTS = [
  {
    title: "My First Api",
    image: project1,
    description:
      "A website using fetch to consume an API to show profiles of users",
    technologies: ["HTML", "CSS", "Vanilla Javascript"],
  },
  {
    title: "IP Geolocation",
    image: project2,
    description:
      "An application for managing public and private IP ",
    technologies: ["HTML", "CSS", "Vanilla Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  LinkedIn: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+52 322 380 8041",
  email: "fabianleon1209@gmail.com ",
};