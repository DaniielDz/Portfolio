import Project from "./Project";

function ProjectsContainer({ styles, title, icon, projects }) {
  return (
    <div className={styles.projectsSection}>
      <h3 className={styles.projectsSectionTitle}>
        {icon} {title}
      </h3>
      <div className={styles.projects_container}>
        {projects.map((project, index) => (
          <Project
            key={index}
            styles={styles}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
