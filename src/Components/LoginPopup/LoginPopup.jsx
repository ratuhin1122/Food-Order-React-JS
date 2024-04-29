import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ Setpopup }) => {
  const [current, Setcurrent] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <img onClick={() => Setpopup(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {current === "LogIn" ? (
            <></>
          ) : (
            <input type="text" placeholder=" Enter Your Name " required />
          )}

          <input type="email" placeholder=" Enter Your Email" required />
          <input type="password" placeholder="Enter  Your Password" required />
        </div>
        <button>{current === "Sign Up" ? "Create account" : "LogIn"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {current === "LogIn" ? (
          <p>
            {" "}
            Create a New Account ?{" "}
            <span onClick={() => Setcurrent("Sign Up")}> Click Here</span>{" "}
          </p>
        ) : (
          <p>
            {" "}
            Already Have An Account{" "}
            <span onClick={() => Setcurrent("LogIn")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
