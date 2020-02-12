import Link from "next/link";
import style from "./css/navbar.module.css";
 

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
    </nav>
  );
};

export default NavBar;
