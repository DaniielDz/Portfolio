import { motion } from "framer-motion";
import styles from "../styles/Education.module.css";
import EducationItem from "../components/EducationItem";
import SectionTitle from "../components/SectionTitle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
};

function Education() {
  const data = [
    {
      title: "Licenciatura en Ciencias de la Computación",
      institution:
        "Facultad de Matemática, Astronomía, Física y Computación - FaMAF",
      date: "2025 - Actualidad",
      description:
        "Estudiante de la licenciatura en ciencias de la computación en FaMAF, Universidad Nacional De Córdoba, 1er semestre.",
    },
    {
      title: "Secundaria Técnica - Técnico Programador",
      institution: "IPET 379 Alfredo Benoit Molet",
      date: "2015 - 2021",
      description:
        "Egresado de la escuela secundaria IPET 379 como Técnico Programador.",
    },
  ];

  return (
    <section id="education">
      <SectionTitle title={"Educación"} />
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <EducationItem
              styles={styles}
              title={item.title}
              institution={item.institution}
              date={item.date}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Education;