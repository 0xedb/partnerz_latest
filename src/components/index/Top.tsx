import style from "./css/top.module.css";

const Top = () => {
  return (
    <div className={`sec ${style.top}`}>
      <div className={`center_t ${style.text}`}>
        <h2>We're the Financial Architects</h2>
        <p>
          Engineering and bringing to life the financial goals and aspirations
          of hardworking people
        </p>
      </div>
    </div>
  );
};

export default Top;
