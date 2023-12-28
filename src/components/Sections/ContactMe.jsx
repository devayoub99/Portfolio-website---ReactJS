import { motion as m } from "framer-motion";

import Button from "../Button";
import { contactMe, emailAndPhone } from "../../data";

const formVariants = {
  hidden: {
    x: "-100%",
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
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
};

export default function ContactMe() {
  return (
    <section className="section light-section contact-me" id="contact me">
      <div className="container">
        <m.div
          className="col-1"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
        >
          <form action="" className="form">
            <input
              type="text"
              placeholder="Your name"
              className="input-field"
            />
            <input type="email" placeholder="Email" className="input-field" />
            <textarea
              placeholder="How can I help?"
              rows="7"
              className="textarea-field"
            />
            <div className="buttons">
              <Button className="button black-button submit-button" href="#">
                Get In Touch
              </Button>
              <div className="social-buttons">
                {contactMe.map((social) => (
                  <Button
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    className={`button social-button ${
                      social.dark ? "black-button" : ""
                    }`}
                  >
                    <img src={social.imgUrl} alt="title" />
                  </Button>
                ))}
              </div>
            </div>
          </form>
        </m.div>
        <m.div
          className="col-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="heading">
            Let's <span className="empty">talk</span> for <br /> something
            special
          </h3>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="social-buttons">
            {emailAndPhone.map((contact) => (
              <Button
                key={contact.title}
                href={contact.data}
                className={`button ${contact.dark ? "black-button" : ""}`}
              >
                <img src={contact.imgUrl} alt={contact.title} />
              </Button>
            ))}
            {/* <span className="contact-way">
              <a href="mailto:admin@devayb.com">admin@devayb.com</a>
            </span>
            <span className="contact-way">
              <a href="tel:+9647807559165">+9647807559165</a>
            </span> */}
          </div>
        </m.div>
      </div>
    </section>
  );
}
