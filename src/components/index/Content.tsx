import style from "./css/content.module.css";
const Content = () => {
  return (
    <section className={`sec ${style.content}`}>
      <p className={style.tag}>
        Financial stability for everyone, by the experts
      </p>
      <p className={style.statement}>
        Partnerz FP is an advisory firm with a daring quest to use financial
        structures to affect lives positively. We are responsible for crafting
        world-class financial solutions that touches individuals, corporates,
        and governments. Partnerz FP is an advisory firm with a daring quest to
        use financial structures to affect lives positively. We are responsible
        for crafting world-class financial solutions that touches individuals,
        corporates, and governments.
      </p>
    </section>
  );
};

export default Content;

// <div className={`${style.tag} center_t`}>
//         <p> </p>
//       </div>
//       <p className={style.firm}>

//       </p>
