import Link from "next/link";
import style from "./css/navbar.module.css";
import CONSTANTS from "../../util/constants.json";

const NavBar = () => {
  return (
    <nav className={`sec ${style.nav}`}>
      <Link href="/">
        <a>
          <img
            className={style.logo}
            src="/images/partnerz_logo.svg"
            alt="partnerz logo"
          />
        </a>
      </Link>
      <div>
        <img className={`center_t ${style.menu}`} src={CONSTANTS.images.menu} />
      </div>
    </nav>
  );
};

export default NavBar;
