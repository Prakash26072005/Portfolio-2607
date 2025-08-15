import React, { useState } from "react";
import styles from "./Navbar.module.css";
import reactlogo from "../../assets/react.svg";


const Navbar = () => {
  const [tab, setSelectedTab] = useState("home");
   const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleChange = (tabName) => {
    setSelectedTab(tabName);
     setMenuOpen(false);
  };

  return (
    <div className={styles.navbar}
 >
      <div className={styles.leftNavabar}>
        <img src={reactlogo} alt="logo" className={styles.logoimage} />
        <h3 className={styles.h3}>Portfolio</h3>
      </div>

      <div>
        <img
          className={styles.logo}
          src="https://cdn-icons-png.flaticon.com/128/14025/14025527.png"
          alt="menu-icon"
          onClick={toggleMenu}
        />
      </div>

        <div
        className={[
          styles.rightNavabar,
          menuOpen ? styles.showMenu : styles.hideMenu,
        ].join(" ")}
      >
        <a
          href="#home"
          className={`${styles.options} ${
            tab === "home" ? styles.selectOption : ""
          }`}
          onClick={() => handleChange("home")}
        >
          Home
        </a>
        <a
          href="#About"
          className={`${styles.options} ${
            tab === "About" ? styles.selectOption : ""
          }`}
          onClick={() => handleChange("About")}
        >
          About
        </a>
        <a
          href="#Skills"
          className={`${styles.options} ${
            tab === "Skills" ? styles.selectOption : ""
          }`}
          onClick={() => handleChange("Skills")}
        >
          Skills
        </a>
        <a
          href="#Resume"
          className={`${styles.options} ${
            tab === "Resume" ? styles.selectOption : ""
          }`}
          onClick={() => handleChange("Resume")}
        >
          Resume
        </a>
        <a
          href="#Contact"
          className={`${styles.options} ${
            tab === "Contact" ? styles.selectOption : ""
          }`}
          onClick={() => handleChange("Contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;