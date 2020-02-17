import Link from "next/link";
import style from "./css/navbar.module.css";
import CONSTANTS from "../../util/constants.json";
import { useState } from "react";
import Overlay from "./Overlay";

const NavBar = () => {
  const [overlay, setOverlay] = useState(false);
  const handleOverlay = () => {
    setOverlay(prev => !prev);
  };

  return (
    <>
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
        <img
          className={`center_t ${style.menu}`}
          onClick={handleOverlay}
          alt="menu"
          src={overlay ? CONSTANTS.images.close : CONSTANTS.images.menu}
        />
        <img className={`center_t ${style.form}`} src={CONSTANTS.images.form} alt="form" />
      </nav>
      <Overlay display={overlay} />
    </>
  );
};

export default NavBar;
