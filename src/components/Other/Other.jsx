import Certificat from "./Certificat/Certificat";
import cssOther from "./Other.module.css";

const Other = props => {
  const certArr = props.certification.map(certificat => (
    <Certificat
      key={certificat.id}
      name={certificat.name}
      link={certificat.link}
      issued={certificat.issued}
      pdf={certificat.pdf}
      image={certificat.image}
    />
  ));
  return (
    <div className={cssOther.container}>
      <h3 className={cssOther.tytle}>Certification</h3>
      <div className={cssOther.imageContainer}>{certArr}</div>
    </div>
  );
};
export default Other;
