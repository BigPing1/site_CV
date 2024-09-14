import cssCert from "./Certificat.module.css";

const Certificat = props => {
  return (
    <a
      className={cssCert.container}
      href={props.link ? props.link : props.pdf}
      target='blank'
    >
      <div className={cssCert.imageBox}>
        <img className={cssCert.image} src={props.image} alt='logo' />
      </div>
      <div className={cssCert.textBox}>
        <h4>{props.name}</h4>
        <p>Issued: {props.issued}</p>
      </div>
    </a>
  );
};
export default Certificat;
