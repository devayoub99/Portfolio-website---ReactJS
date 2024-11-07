import SectionTitle from "../SectionTitle";
import Project from "../Project";

import { experience } from "../../data";

export default function Experience({ children, ...props }) {
  return (
    <section {...props}>
      <SectionTitle bold="Experience" />
      <div className="container">
        <ul className="experience-list">
          {experience.map((organization) => (
            <Organization details={organization} key={organization.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Organization({ details }) {
  return (
    <li className="job-details">
      <span className="organization-name">{details.organization}</span>
      <span className="title-n-duration">
        <span className="job-title">{details.jobTitle}</span>
        <span className="duration">{details.duration}</span>
      </span>
      {details.achievements?.map((achievement) => (
        <span className="achievements">{achievement}</span>
      ))}
    </li>
  );
}
