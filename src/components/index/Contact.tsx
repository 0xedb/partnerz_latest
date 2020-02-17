import Link from "next/link";
import style from "./css/contact.module.css";
import { PrimaryButton } from "office-ui-fabric-react";

const Contact = () => {
  return (
    <div className={style.contact}>
      <p>A journey of a thousand miles begins with a single step</p>
      <p>Begin your financial journey here</p>
      <Link href="/form">
        <a>
          <PrimaryButton text="Start" className="center_t" />
        </a>
      </Link>
    </div>
  );
};

export default Contact;
