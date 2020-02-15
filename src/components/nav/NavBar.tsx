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
          <img
            className={`center_t ${style.menu}`}
            onClick={handleOverlay}
            src={overlay ? CONSTANTS.images.close : CONSTANTS.images.menu}
          />
        </div>
      </nav>
      <Overlay display={overlay} />
    </>
  );
};

export default NavBar;
