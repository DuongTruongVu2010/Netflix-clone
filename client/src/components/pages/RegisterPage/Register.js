import classNames from "classnames/bind";
import stypes from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

const cx = classNames.bind(stypes);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://localhost:8800/api/auth/registerapp", {
        email,
        password,
        username,
      });
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cx("register")}>
      <div className={cx("top")}>
        <div className={cx("wrapper")}>
          <img
            className={cx("logo")}
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
          <Link to="/login" className={cx("loginButton")}>
            Sign In
          </Link>
        </div>
      </div>
      <div className={cx("container")}>
        <h1>Unlimited movies, TV shows, anh more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className={cx("input")}>
            <input type="email" placeholder="email address.." ref={emailRef} />
            <button className={cx("registerButton")} onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className={cx("input")}>
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className={cx("registerButton")} onClick={handleFinish}>
              Get Started
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
