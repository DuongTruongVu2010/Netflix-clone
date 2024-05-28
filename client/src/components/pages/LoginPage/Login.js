import classNames from "classnames/bind";
import stypes from "./Login.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext/AuthContext";
import { login } from "../../../context/authContext/apiCall";

const cx = classNames.bind(stypes);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFeching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className={cx("login")}>
      <div className={cx("top")}>
        <div className={cx("wrapper")}>
          <img
            className={cx("logo")}
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
        </div>
      </div>
      <div className={cx("container")}>
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or Phone Number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={cx("loginButton")}
            onClick={handleSubmit}
            disabled={isFeching}
          >
            Sign In
          </button>
          <span>
            New to NetFlix <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
