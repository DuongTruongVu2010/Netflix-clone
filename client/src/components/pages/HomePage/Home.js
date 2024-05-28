import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import axios from "axios";

import Navbar from "../../Navbar/Navbar";
import Featured from "../../Featured/Featured";
import List from "../../List/List";

const cx = classNames.bind(styles);
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTJkNTZkYTA2NTVjNWQyODgwOGY1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjc3NzI4MSwiZXhwIjoxNzEzMjA5MjgxfQ.hQillxVzPHj5wApYgnemGec8fJrLnvK_-4btnb-aP0M",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomLists();
  }, [type, genre]);
  return (
    <div className={cx("home")}>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default Home;
