import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/4.jpeg";
import freshBurger from "../../assets/1.webp";
import hipsster from "../../assets/2.webp";
import fitLift from "../../assets/3.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PrathamHandique/College-Navigation-System"
          h3="College Navigation App"
          p="Navigation App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PrathamHandique/Scrapping-and-insights-on-2024-Parliamentory-Constituencies-Election-Results"
          h3="LokSabha Elections Evaluation"
          p="Visualisation & Scraping "
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Social Web App"
          p="Ongoing Project that Uses Rest Architecture"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/PrathamHandique/AR-Dinosaur-encyclopedia-application-Unity3D-"
          h3="Dinosaur Encyclopedia"
          p="AR App"
        />
      </div>
    </section>
  );
}

export default Projects;
