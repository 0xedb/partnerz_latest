import style from "./css/services.module.css";
import CONSTANTS from "../../util/constants.json";

const Service = ({ head, pic, desc }: PartnerService) => {
  return (
    <div className={style.service}>
      <img src={pic} alt={head} />
      <div className='content'>
        <h3>{head}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className={style.services}>
      {CONSTANTS.services.map(service => (
        <Service {...service} key={service.head} />
      ))}
    </section>
  );
};

export default Services;
