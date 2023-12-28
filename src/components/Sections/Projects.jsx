import SectionTitle from "../SectionTitle";
import Project from "../Project";

import { projects } from "../../data";

export default function Projects({ children, ...props }) {
  return (
    <section {...props}>
      <SectionTitle light="My" bold="Projects" />
      <div className="container">
        {projects.map((projectData) => (
          <Project key={projectData.seq} {...projectData} />
        ))}
      </div>
    </section>
  );
}
