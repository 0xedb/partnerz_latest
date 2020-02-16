import style from "./css/top.module.css";
import CONSTANTS from '../../util/constants.json'
import Stock from '../stock/Stock';

const Top = () => {
  return (
    <div className={style.top}>
      <div className={style.background}>
        <img src={CONSTANTS.images.top_bg} alt="background" />
      </div>
      <div className={`center_t ${style.text}`}>
        <h2>We're the Financial Architects</h2>
        <p>
          Engineering and bringing to life the financial goals and aspirations
          of hardworking people
        </p>
      </div>
      <Stock />
    </div>
  );
};

export default Top;
