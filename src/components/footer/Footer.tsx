import style from "./css/footer.module.css";
import Map from "../map/Map";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <address>
        <div>
          <a href="tel:+233504461779">0504461779</a>
        </div>
        <div>
          <a href="mailto:hello@mypartnerz-fp.com">hello@mypartnerz-fp.com</a>
        </div>
        <div>Plot No. 21 Airport City, Accra</div>
      </address>
      <Map />
      <div>
        &copy;{new Date().getFullYear()} Partnerz FP Limited | CS230462018
      </div>
    </footer>
  );
};

export default Footer;
