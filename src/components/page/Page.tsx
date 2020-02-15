import style from "./css/page.module.css";
const Page = ({ children }: ParentElement) => {
  return <div id="page">{children}</div>;
};

export default Page;
