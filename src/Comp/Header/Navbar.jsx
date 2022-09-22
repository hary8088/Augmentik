import React from 'react'
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import img from "../../Images/idea.png";
import { useState } from "react";

function Navbar() {
  const [change, setchange] = useState(false);
  const scrollevent = () => {
    if (window.scrollY >= 100) {
      setchange(true);
    } else {
      setchange(false);
    }
  };
  window.addEventListener("scroll", scrollevent);
  return (
       <React.Fragment>
        <div className={
          change ? Styles.Navbar : Styles.Navbar
        }>
          {/* `${Styles.Navbar}${Styles.notNavbar}` */}
        {/* <div className={Styles.Navbar}> */}
        <div className={Styles.left}>
            <div className={Styles.image}>
              <img src={img} alt="Academic " />
            </div>
            <div className={Styles.brandName}>
              <h1>Addemic</h1>
            </div>
        </div>
        <div className={Styles.right}>
            <div className={Styles.buttons}>
            <h2>
              <Link className="link" to="/" style={{textDecoration : 'none',color :'black'}}>
              Home
              </Link>
              </h2>
            </div>
            <div className={Styles.buttons}>
              <h2>Contact</h2>
            </div>
            <div className={Styles.buttons}>
            <h2>
              <Link className="link" to="/login" style={{textDecoration : 'none',color :'black'}}>
              Login
              </Link>
              </h2>
            </div>
        </div>
        </div>
        {/* </div> */}
       </React.Fragment>
  
  )
}

export default Navbar