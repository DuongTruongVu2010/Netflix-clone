import classNames from "classnames/bind";
import axios from "axios";
import styles from "./ListItem.module.scss";
import { useEffect, useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/movies/find/" + item,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setMovie(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className={cx("listItem")}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="MAI" />
        {isHovered && (
          <>
            <video autoPlay={true} loop>
              <source src={movie.trailer} type="video/mp4" />
            </video>

            <div className={cx("itemInfo")}>
              <div className={cx("icons")}>
                <PlayArrow className={cx("icon-p")} />
                <Add className={cx("icon-a")} />
                <ThumbUpAltOutlined className={cx("icon-t")} />
                <ThumbDownOutlined className={cx("icon-th")} />
              </div>
              <div className={cx("itemInfoTop")}>
                <span>{movie.duration}</span>
                <span className={cx("limit")}>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className={cx("desc")}>{movie.desc}</div>
              <div className={cx("genre")}>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
