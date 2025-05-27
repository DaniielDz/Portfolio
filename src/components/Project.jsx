import { motion } from "framer-motion";
import { FaCode, FaRegEye } from "react-icons/fa";

function Project({ styles, title, subtitle, imageUrl, demoUrl, codeUrl }) {
  return (
    <motion.div
      className={styles.project}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.project_card}
      >
        <img src={imageUrl} alt={title} />
        <div className={styles.project_overlay}>
          <h3 className={styles.project_title}>{title}</h3>
          <p className={styles.project_subtitle}>{subtitle}</p>
        </div>
      </a>
      <div className={styles.project_actions}>
        {codeUrl && (
          <a
            className={styles.project_button}
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Código <FaCode color="#fff" />
          </a>
        )}
        <a
          className={styles.project_button}
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo <FaRegEye color="#fff" />
        </a>
      </div>
    </motion.div>
  );
}

export default Project;
