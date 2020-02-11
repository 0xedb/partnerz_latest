import { useEffect, useState } from "react";
import style from "./css/navbar.module.css";

const NavBar = () => {
  const [navStyle, setNavStyle] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 10
        ? setNavStyle(style.nav_style)
        : setNavStyle(null);
    });
  });
  return <nav className={`${style.nav} ${navStyle}`}>adfjdasf</nav>;
};

export default NavBar;
