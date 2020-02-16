import "lazysizes";
import style from "./css/stock.module.css";

const Stock = () => {
  return (
    <iframe
      className={`lazyload ${style.stock}`}
      src="https://gsestockfeed.com/style2.php"
      scrolling="no"
    ></iframe>
  );
};

export default Stock;
