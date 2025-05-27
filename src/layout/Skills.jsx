import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import styles from "../styles/Skills.module.css";
import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function Skills() {
  const skills = [
    { icon: <SiJavascript />, title: "Javascript" },
    { icon: <SiTypescript />, title: "TypeScript" },
    { icon: <SiReact />, title: "React" },
    { icon: <SiNextdotjs />, title: "Next.JS" },
    { icon: <SiNodedotjs />, title: "Node.js" },
    { icon: <SiExpress />, title: "Express.js" },
    { icon: <SiCss3 />, title: "CSS" },
    { icon: <SiTailwindcss />, title: "Tailwind" },
    { icon: <SiBootstrap />, title: "Bootstrap" },
    { icon: <SiSass />, title: "Sass" },
    { icon: <SiMysql />, title: "MySQL" },
    { icon: <SiPostgresql />, title: "PostgresSQL" },
    { icon: <SiHtml5 />, title: "HTML" },
    { icon: <SiGit />, title: "Git" },
    { icon: <SiGithub />, title: "GitHub" },
  ];

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div variants={item}>
        <SectionTitle title="Habilidades" />
      </motion.div>

      <motion.ul className={styles.skillsList}>
        {skills.map((skill, idx) => (
          <motion.li className={styles.skill} key={idx} variants={item}>
            {React.cloneElement(skill.icon, { className: styles.icon })}
            <span className={styles.skill_title}>{skill.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Skills;
