import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const user = useContext(UserContext);
  const online = useOnlineStatus();

  return (
    <div className="flex justify-between border-b-2 shadow-sm">
      <div className="w-36" >
        <img src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex gap-12 align-middle pt-10 text-xl font-bold text-orange-800 pr-8">
          <li className="text-sky-500">{online ? <span className="text-sky-500">Online</span> : <span className="text-zinc-950">Off-line</span>}</li>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <Link to="/grocery"><li>Grocery</li></Link>
          <li>
            <button
              onClick={() =>
                btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
              }
            >
              {btnText}
            </button>
          </li>
          <li>
            {user.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
