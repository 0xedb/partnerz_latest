import style from "./css/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <address>
        <a href="tel:+233504461779">0504461779</a>
        <a href="mailto:hello@mypartnerz-fp.com">hello@mypartnerz-fp.com</a>
        <div>Plot No. 21 Airport City, Accra</div>
        <div>&copy;{new Date().getFullYear()} Partnerz FP Limited</div>
      </address>
    </footer>
  );
};

export default Footer;
