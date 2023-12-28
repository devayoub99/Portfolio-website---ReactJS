import SectionTitle from "../SectionTitle";
import Skill from "../Skill";

import { skills } from "../../data";

export default function Skills() {
  return (
    <section className="section light-section skills" id="skills">
      <SectionTitle light="My" bold="Skills" />

      <div className="container">
        {skills.map((skillData) => {
          return (
            <Skill
              key={skillData.caption}
              className={`skill ${skillData.dark ? "dark" : ""}`}
              caption={skillData.caption}
              img={skillData.img}
            />
          );
        })}
      </div>
    </section>
  );
}
