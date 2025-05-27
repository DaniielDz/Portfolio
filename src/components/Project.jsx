import { FaCode, FaRegEye } from "react-icons/fa";

function Project({ styles, title, subtitle, imageUrl, demoUrl, codeUrl }) {
  return (
    <div className={styles.project}>
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
    </div>
  );
}

export default Project;
