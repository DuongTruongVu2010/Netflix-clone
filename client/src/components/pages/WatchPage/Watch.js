import classNames from "classnames/bind";
import styles from "./Watch.module.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Watch() {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className={cx("watch")}>
      <Link to="/">
        <div className={cx("back")}>
          <ArrowBackOutlined />
          Home
        </div>
      </Link>

      <video className={cx("video")} controls autoPlay={true}>
        <source src={movie.trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default Watch;
