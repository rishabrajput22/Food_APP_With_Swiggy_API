import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-amber-400  ">
      <div className="logo">
        <img className="w-[100px]" src={CDN_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold" >
          <li className="px-10">Online Status: {onlineStatus ? "Yes" : "No"}</li>
          <li className="px-10">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-10">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-10">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-10">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-10"> Cart </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
