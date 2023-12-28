import { motion as m } from "framer-motion";

import Button from "../Button";
import Header from "./Header";

import downloadIcon from "../../assets/download.svg";
import developerImage from "../../assets/developer.svg";

import myResume from "../../assets/resume.pdf";

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="landing container">
        <section className="info">
          <div className="main-heading">
            <p>
              Hello I'm <span className="filled">Ayoub Jasim.</span>
            </p>
            <p>
              <span className="filled">Frontend </span>
              <span className="empty">Developer</span>
            </p>
            <p>
              Based in <span className="filled">Iraq.</span>
            </p>
          </div>
          <p className="brief">
            I create high performance websites ❤
          </p>
          <Button href={myResume} className="button black-button">
            download CV <img src={downloadIcon} alt="Download icon" />
          </Button>
        </section>

        <section className="image">
          <m.img
            src={developerImage}
            alt="Developer picture"
            initial={{
              left: "-100%",
              width: 0,
            }}
            animate={{ width: "100%", left: 0 }}
            transition={{ duration: 0.7 }}
            // transition={{ type: "spring", stiffness: 80 }}
          />
        </section>
      </div>
    </section>
  );
}
