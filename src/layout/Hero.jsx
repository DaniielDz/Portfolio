import styles from "../styles/Hero.module.css";
import image from "../assets/image.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

function Hero() {
  

  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img src={image} alt="Profile" className={styles.heroImage} />
      </div>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>
          Hola, soy{" "}
          <span className={styles.heroTitleName}>Daniel Díaz</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Desarrollador Web{" "}
          <span className={styles.role}>
            <Typewriter
              words={["FullStack", "Backend", "Frontend"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <ul className={styles.heroLinks}>
          <li>
            <a href="#" target="_blank" className={styles.heroLink}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className={styles.heroLink}>
              <FaLinkedin/>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className={styles.heroLink}>
              <TbBrandFiverr />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;