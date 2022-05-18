import style from "./style.module.scss";
import Header from "../header";
const Layout = (props) => {
  const { children } = props;
  return (
    <div className={style.layoutContainer}>
      <Header />
      <div className={style.children}>{children}</div>
    </div>
  );
};

export default Layout;
