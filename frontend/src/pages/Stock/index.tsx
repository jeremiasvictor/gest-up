// import api from "../../services/api";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import {
  //FaGear,
  FaBars,
  //FaMoon,
  FaUser,
  //FaLayerGroup,
  //FaBoxOpen,
  //FaCheckToSlot,
  //FaFaceSmile,
  //FaEye,
  //FaEyeSlash,
  //FaExpand,
} from "react-icons/fa6";
//import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";

import "./style.css";

function Stock() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="header-left">
          <button className="menu">
            <FaBars className="fa-bars" />
          </button>

          <a href="/" className="gestup-logo">
            <img src="../../../public/com-sombra.png" alt="Logo Image" />
          </a>
        </div>

        <div className="header-right">
          <ThemeToggle />
          <button className="user">
            <FaUser className="fa-user" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Stock;
