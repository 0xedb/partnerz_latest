import { useState } from "react";
import style from "./css/services.module.css";
import CONSTANTS from "../../util/constants.json";

const Service = ({ head, pic, desc }: PartnerService) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(prev => !prev);
  };

  return (
    <div
      className={style.service}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`${style.filler} ${hover ? style.fill : ""}`} />
      <img src={pic} alt={head} />
      <h3>{head}</h3>
      <p>{desc}</p>
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
