import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

const cx = classNames.bind(styles);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div className={cx("navbar", { scrolled: isScrolled })}>
      <div className={cx("container")}>
        <div className={cx("left")}>
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix"
          />
          <Link to="/" className={cx("link")}>
            <span>Home</span>
          </Link>
          <Link to="/series" className={cx("link")}>
            <span className={cx("navbarnameLink")}>Series</span>
          </Link>
          <Link to="/movies" className={cx("link")}>
            <span className={cx("navbarnameLink")}>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className={cx("right")}>
          <Search className={cx("icon-s")} />
          <span>KID</span>
          <Notifications className={cx("icon-n")} />
          <img
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meme-meo-cute-de-thuong.jpg"
            alt="avatar"
          />
          <div className={cx("profile")}>
            <ArrowDropDown className={cx("icon-a")} />
            <div className={cx("options")}>
              <span>Setting</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
