import cssProject from "./Project.module.css";

const Project = props => {
  return (
    <a href={props.href} className={cssProject.container} target='black'>
      <img className={cssProject.icon} src={props.image} alt='icon' />
      <p>{props.name}</p>
      <p>Adaptive for phone: {props.adaptive}</p>
    </a>
  );
};
export default Project;
