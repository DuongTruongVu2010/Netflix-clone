import "./widgetSm.css";
import axios from "axios";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/users?new=true",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUser();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((user, index) => (
          <li key={index} className="widgetSmListItem">
            <img
              className="widgetSmImg"
              alt=""
              src={
                user.profilePic ||
                "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
              }
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmBtn">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
