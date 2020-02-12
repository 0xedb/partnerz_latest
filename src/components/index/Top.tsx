import style from "./css/top.module.css";
import Stock from "../stock/Stock";

const Top = () => {
  return (
    <div className={style.top}>
      <div className={`${style.text} center_t`}>
        <h2>We're the Financial Architects</h2>
        <p>
          Engineering and bringing to life the financial goals and aspirations
          of hardworking people
        </p>
      </div>
      <div className={style.stock}>
        <Stock />
      </div>
    </div>
  );
};

export default Top;
