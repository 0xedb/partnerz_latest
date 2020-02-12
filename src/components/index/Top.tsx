import style from "./css/top.module.css";
import Stock from "../stock/Stock";

const Top = () => {
  return (
    <div className={style.top}>
      <div className={style.text}>
        <h2>We're the Financial Architects</h2>
        <p>
          At Partnerz, we engineer and bring to life the financial goals and
          aspirations of hardworking people
        </p>
      </div>
    </div>
  );
};

export default Top;
