import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import sass from "./assets/sass.png";
import bootstrap from "./assets/bootstrap.png";
import taliwindcss from "./assets/tailwindcss.png";
import git from "./assets/git.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";
import figma from "./assets/figma.png";

import newProject from "./assets/new.webp";
import youtubeProject from "./assets/youtube.webp";
import ecoProject from "./assets/eco.webp";
import oldProject from "./assets/old.webp";

import facebookIcon from "./assets/facebook.svg";
import linkedinIcon from "./assets/linkedin.svg";
import discordIcon from "./assets/discord.svg";

import emailIcon from "./assets/email.svg";
import phoneIcon from "./assets/phone.svg";

const navLinks = ["skills", "projects", "about me", "contact me"];

const skills = [
  {
    caption: "HTML 5",
    img: html,
  },
  {
    caption: "CSS 3",
    img: css,
  },
  {
    caption: "JavaScript",
    img: javascript,
    dark: true,
  },
  {
    caption: "SASS",
    img: sass,
  },
  {
    caption: "Bootstrap",
    img: bootstrap,
  },
  {
    caption: "TailwindCSS",
    img: taliwindcss,
  },

  {
    caption: "Git",
    img: git,
  },
  {
    caption: "React JS",
    img: react,
    dark: true,
  },
  {
    caption: "Redux",
    img: redux,
  },
  {
    caption: "Figma",
    img: figma,
  },
];

const projects = [
  {
    seq: "01",
    title: "YouTube - Cloned",
    description:
      "Clone YouTube using ReactJS and youtube v3 API. Offers Some good features of YouTube.",
    technologies: ["React JS", "TailwindCSS"],
    liveUrl: "https://youtube-cloned.devayb.com",
    repoUrl: "https://github.com/devayoub99/YouTube---Cloned",
    imgUrl: youtubeProject,
  },
  {
    seq: "02",
    title: "New portfolio website",
    description:
      "My new portfolio website, created using React, Framer-motion and SCSS",
    technologies: ["React JS", "Framer-motion", "SCSS"],
    liveUrl: "https://devayb.com",
    liveRepo: "#",
    imgUrl: newProject,
  },
  {
    seq: "03",
    title: "E-commerce Website",
    description:
      "Ecommerce website Build from scratch, Using HTML, SCSS, JavaScript and RESTful API",
    technologies: ["HTML", "SCSS", "JavaScript"],
    liveUrl: "https://eco.devayb.com",
    repoUrl: "https://github.com/devayoub99/Ecommerce-website",
    imgUrl: ecoProject,
  },
  {
    seq: "04",
    title: "Old Portfolio Website",
    description: "My portfolio website, with HTML, JavaScript and SCSS.",
    technologies: ["HTML", "SCSS", "JavaScript"],
    liveUrl: "https://old.devayb.com",
    repoUrl: "https://github.com/devayoub99/Portfolio-website",
    imgUrl: oldProject,
  },
];

const contactMe = [
  {
    id: 1,
    title: "facebook",
    url: "https://www.facebook.com/profile.php?id=100085270735685",
    imgUrl: facebookIcon,
    dark: true,
  },
  {
    id: 2,
    title: "linkedin",
    url: "https://www.linkedin.com/in/ayoubjasim/",
    imgUrl: linkedinIcon,
  },
  {
    id: 4,
    title: "discord",
    url: "https://discord.com/users/869210911863361567",
    imgUrl: discordIcon,
  },
];

const emailAndPhone = [
  {
    id: 1,
    title: "Email",
    data: "mailto:admin@devayb.com",
    imgUrl: emailIcon,
    dark: true,
  },
  {
    id: 2,
    title: "Phone",
    data: "tel:+9647807559165",
    imgUrl: phoneIcon,
  },
];

export { navLinks, skills, projects, contactMe, emailAndPhone };
