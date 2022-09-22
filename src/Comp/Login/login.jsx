// import { Link } from '@mui/material'
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import Styles from "../Login/login.module.css"
// import Navbar from "../Header/Navbar"
export default class login extends Component {
  render() {
    return (
        <>
        {/* <Navbar/> */}
        <div className={Styles.head}>
        <div className={Styles.image}>
          <img
            src="https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className={Styles.content}>
          <h1>Login</h1>
          <div className={Styles.forms}>
            <div className={Styles.field}>
              <form action="">
                <label>UserName*</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Username"
                />
                <br />
                <br />
                <label>Password*</label>
                <input
                  type="password"
                  name=""
                  placeholder="Enter your Password"
                  id=""
                />
                <br />
                <br />
                <input type="checkbox" name="" id="" />
                <label> Remember Me</label>
                <br />
                <br />
                <div className={Styles.button}>
                  <input type="button" value="Login" />
                </div>
              </form>
            </div>
          </div>
          <div className={Styles.inner1}>
            <h3>Forget Password</h3>
            <Link className="link" to="/" style={{textDecoration : 'none',color :'black'}}>
            <h3>Back To Home</h3>
            </Link>
          </div>
        </div>
      </div></>
    )
  }
}
