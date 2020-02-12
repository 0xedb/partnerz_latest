import style from "./css/content.module.css";
const Content = () => {
  return (
    <section className={style.content}>
      <div className={`${style.tag} center_t`}>
        <p> Financial stability for everyone, by the experts</p>
      </div>
      <p className={style.firm}>
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
