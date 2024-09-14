import cssPortfolio from "./Portfolio.module.css";
import Project from "./Project/Project";

const Portfolio = props => {
  const projectArr = props.projects.map(project => (
    <Project
      key={project.id}
      name={project.name}
      href={project.href}
      adaptive={project.adaptive}
      image={project.image}
    />
  ));
  return <div className={cssPortfolio.container}>{projectArr}</div>;
};
export default Portfolio;
