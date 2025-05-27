import { FaMedal } from "react-icons/fa6";

function EducationItem({ styles, title, institution, date, description }) {
  return (
    <div className={styles.card}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.institution}>{institution}</span>
        <span className={styles.date}>{date}</span>
        <p className={styles.description}>{description}</p>
      </div>
      <FaMedal className={styles.icon} />
    </div>
  );
}

export default EducationItem;
