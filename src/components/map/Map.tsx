import style from "./css/map.module.css";
import CONSTANTS from "../../util/constants.json";

const Map = () => {
  return (
    <iframe
      className={style.map} 
      frameBorder="0"
      src={CONSTANTS.map}
      allowFullScreen
    ></iframe>
  );
};

export default Map;
