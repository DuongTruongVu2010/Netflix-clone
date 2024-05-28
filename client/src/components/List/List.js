import classNames from "classnames/bind";
import styles from "./List.module.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className={cx("list")}>
      <span className={cx("listTitle")}>{list.title}</span>
      <div className={cx("wrapper")}>
        <ArrowBackIosOutlined
          className={cx("sliderArrow-l", "left")}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className={cx("container")} ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>

        <ArrowForwardIosOutlined
          className={cx("sliderArrow-r", "right")}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
