import { motion as m } from "framer-motion";

import { useRef } from "react";

import githubIcon from "../assets/github.svg";

export default function Project(props) {
  const order = props.seq % 2;
  const projectDir = order ? "left" : "right";

  const imageContainer = useRef(null);
  const img = useRef(null);

  console.log(imageContainer?.current?.clientHeight);

  function handleMouseHover() {
    img.current.style.transform = `translateY(calc(-100% + ${imageContainer?.current?.clientHeight}px))`;
  }

  function handleMouseLeave() {
    img.current.style.transform = `translateY(0)`;
  }

  const projectVariants = {
    hidden: {
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
    },
  };

  const imgVariants = {
    hidden: {
      x: projectDir === "left" ? "-100%" : "100%",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: projectDir === "left" ? "100%" : "-100%",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };

  return (
    <m.div
      className={`project ${projectDir}`}
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
    >
      <m.a
        href={props.liveUrl}
        className="image"
        target="_blank"
        variants={imgVariants}
        ref={imageContainer}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.imgUrl} alt={`Project ${props.seq}`} ref={img} />
      </m.a>
      <m.div className="text" variants={textVariants}>
        <span className="seq">{props.seq}</span>
        <h3 className="title">
          {props.title}
          <a href={props.repoUrl} target="_blank">
            <img src={githubIcon} alt="GitHub link" />
          </a>
        </h3>
        <p className="description">{props.description}</p>
        <div className="technologies">
          {props.technologies.map((tech) => (
            <span key={tech} className="technology">
              {tech}
            </span>
          ))}
        </div>
      </m.div>
    </m.div>
  );
}
