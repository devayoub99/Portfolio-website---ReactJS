import { motion as m } from "framer-motion";

import SectionTitle from "../SectionTitle";
import aboutMeImg from "../../assets/aboutme.svg";

const imgVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
};

const textVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
};

export default function AboutMe() {
  return (
    <section className="section light-section about-me" id="about me">
      <div className="container">
        <m.div
          className="image"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img src={aboutMeImg} alt="About me" />
        </m.div>
        <m.div
          className="text"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
        >
          <SectionTitle light="About" bold="Me" />
          <p>
            I'm a passionate, self-learning developer who specializes in
            <span className="bold"> Frontend development</span>. User
            experience, pixel perfect design, and writing clean, readable,
            highly performant code matters to me. I began my journey in 2020,
            and since then, I've continued to grow and evolve as a developer,
            taking on new challenges and learning the latest technologies along
            the way. Now, I have
            <span className="bold"> +3 years experience</span>, I'm building
            cutting-edge web applications using modern technologies such as
            <span className="bold"> React JS, Tailwindcss</span>, and much more.
          </p>
        </m.div>
      </div>
    </section>
  );
}
