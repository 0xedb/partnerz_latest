import Link from "next/link";
import style from "./css/navbar.module.css";
import Stock from "../stock/Stock";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Link href="/">
        <a>
          <img
            className={style.logo}
            src="/images/partnerz_logo.svg"
            alt="partnerz logo"
          />
        </a>
      </Link>
      <div className={style.stock}>
        <Stock />
      </div>
    </nav>
  );
};

export default NavBar;
