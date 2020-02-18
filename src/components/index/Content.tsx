import style from "./css/content.module.css";
import CONSTANTS from "../../util/constants.json";
import Services from "./Services";
import Feedback from "./Feedback";
import Contact from "./Contact";

const Content = () => {
  return (
    <section className={`centered ${style.content}`}>
      <h3 className={style.head}>
        Financial stability for everyone, by the experts
      </h3>
      <div className={style.say}>
        <div className={style.say_img} />
        <div className={`${style.quote} centered`}>
          <img src={CONSTANTS.images.quote} alt="quote" />
        </div>
        <p className={style.statement}>
          Partnerz FP is an advisory firm with a daring quest to use financial
          structures to affect lives positively. We are responsible for crafting
          world-class financial solutions that touches individuals, corporates,
          and governments. Partnerz FP is an advisory firm with a daring quest
          to use financial structures to affect lives positively. We are
          responsible for crafting world-class financial solutions that touches
          individuals, corporates, and governments.
        </p>
      </div>

      <Services />
      <Feedback />
      <Contact />
    </section>
  );
};

export default Content;
// <Services />
