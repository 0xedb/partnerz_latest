import style from "./css/services.module.css";
import CONSTANTS from "../../util/constants.json";

const Service = ({ head, pic, desc }: PartnerService) => (
  <div className={style.service}>
    <img src={pic} alt={head} />
    <h2>{head}</h2>
    <p>{desc}</p>
  </div>
);

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
