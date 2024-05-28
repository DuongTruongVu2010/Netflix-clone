import classNames from "classnames/bind";
import styles from "./Featured.module.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRamdomContent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/movies/random?type=${type}`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setContent(res.data[0]);
      } catch (e) {
        console.log(e);
      }
    };
    getRamdomContent();
  }, [type]);
  return (
    <div className={cx("featured")}>
      {type && (
        <div className={cx("category")}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="anime">Anime</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="background" />
      <div className={cx("info")}>
        <img className={cx("imgTitle")} src={content.imgTitle} alt="" />
        <span className={cx("desc")}>{content.desc}</span>
        <div className={cx("buttons")}>
          <button className={cx("play")}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className={cx("more")}>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
