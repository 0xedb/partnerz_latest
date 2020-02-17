import style from "./css/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}> 
      <address>
        <div>Plot No. 21 Airport City, Accra</div>
        <div>&copy;{new Date().getFullYear()} Partnerz FP Limited</div>
      </address>
    </footer>
  );
};

export default Footer;
