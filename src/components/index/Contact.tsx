import Link from "next/link";
import style from "./css/contact.module.css";
import { Button } from "antd";

const Contact = () => {
  return (
    <div className={style.contact}>
      <p>A journey of a thousand miles begins with a single step</p>
      <p>Begin your financial journey here with us</p>
      <Link href="/form">
        <a>
          <Button size="large" className="center_t">
            Start
          </Button>
        </a>
      </Link>
    </div> 
  );
};

export default Contact;
