import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./css/navbar.module.css";
import Stock from "../stock/Stock";

const NavBar = () => {
  const [navStyle, setNavStyle] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 10
        ? setNavStyle(style.nav_style)
        : setNavStyle(null);
    });
  });
  return (
    <nav className={`${style.nav} ${navStyle}`}>
      <Link href="/">
        <a>
          <img
            className={style.logo}
            src="/images/partnerz_logo.svg"
            alt="partnerz logo"
          />
        </a>
      </Link>
      <div className={`${style.stock} ${navStyle}`}>
        <Stock />
      </div>
    </nav>
  );
};

export default NavBar;
