import style from "./css/services.module.css";
import CONSTANTS from "../../util/constants.json";

const Service = ({ head, pic, desc }: PartnerService) => {
  return (
    <div className={style.service}> 
      <img src={pic} alt={head} />
      <h3>{head}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className={style.services}>
      sss
    </section>
  );
};

export default Services;
// {CONSTANTS.services.map(service => (
//         <Service {...service} key={service.head} />
//       ))}