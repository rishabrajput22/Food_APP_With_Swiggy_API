import { useContext, useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-[#fc8019]  ">
      <div className="logo">
        <img className="w-[100px]" src={CDN_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold">
          <li className="px-10">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li className="px-10 font-bold">
            <Link to="/cart"> Cart ({cartItems.length}) items </Link>
          </li>
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
