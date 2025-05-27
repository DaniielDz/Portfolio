// AboutMe.jsx
import { motion } from "framer-motion";
import { FaRegUser, FaFilePdf } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle";
import styles from "../styles/AboutMe.module.css";
import cvPDF from '../assets/MarioDanielDiazCV.pdf';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
};

export default function AboutMe() {
  return (
    <section className={styles.aboutMe} id="aboutMe">
      {/* 1) Contenedor “Sobre Mí” */}
      <motion.div
        className={styles.aboutMe__content}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        exit="exit"
      >
        <motion.div variants={itemUp}>
          <SectionTitle title="Sobre Mí" />
        </motion.div>

        <motion.p className={styles.description} variants={itemUp}>
          Soy Daniel Díaz, Desarrollador Web Fullstack con 3 años de experiencia
          como freelance en la plataforma Fiverr, colaborando con clientes
          internacionales en el desarrollo de soluciones web a medida.
        </motion.p>

        <motion.p className={styles.description} variants={itemUp}>
          Busco integrarme en una empresa que me permita aportar mi experiencia
          y seguir creciendo profesionalmente, en un entorno colaborativo donde
          se valore la calidad del código, la mejora continua y la innovación
          tecnológica.
        </motion.p>

        <motion.a
          className={styles.btnDownloadCV}
          href={cvPDF}
          download="Mario Daniel Díaz CV.pdf"
          variants={itemUp}
        >
          <span className={styles.bars}></span>
          <span className={styles.bars}></span>
          <span className={styles.bars}></span>
          <span className={styles.bars}></span>
          Descargar CV <FaFilePdf />
        </motion.a>
      </motion.div>

      {/* 2) Contenedor Datos Personales */}
      <motion.div
        className={styles.data__content}
        variants={container}    
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        exit="exit"
      >
        <motion.h3 className={styles.data__title} variants={itemLeft}>
          <FaRegUser color="#FF0000" /> Datos Personales
        </motion.h3>
        <motion.ul className={styles.information__list} variants={itemLeft}>
          <li className={styles.information__item}>
            <span>Email</span> daniieldz10@gmail.com
          </li>
          <li className={styles.information__item}>
            <span>Ubicación</span> Córdoba, Argentina
          </li>
          <li className={styles.information__item}>
            <span>Idiomas</span> Español (nativo), Inglés (intermedio)
          </li>
          <li className={styles.information__item}>
            <span>GitHub</span> github.com/daniieldz
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
