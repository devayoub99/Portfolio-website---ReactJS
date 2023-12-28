import { motion as m } from "framer-motion";

const skillVariants = {
  initial: {
    x: "-120px",
  },
  inView: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function Skill({ caption, img, children, ...props }) {
  return (
    <m.div
      {...props}
      variants={skillVariants}
      initial="initial"
      whileInView="inView"
    >
      <div className="image">
        <img src={img} alt={caption} />
      </div>
      <h3 className="caption">{caption}</h3>
    </m.div>
  );
}
