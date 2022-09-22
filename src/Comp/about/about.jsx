import React, { Component } from 'react'
import Navbar from '../Header/Navbar'
import Styles from "../about/about.module.css"
import student from "../../Images/student.jpg"
export default class about extends Component {
  render() {
    return (
        <>
        <div className={Styles.mainframe}>
          <Navbar/>
          <div className={Styles.main}>
            <div className={Styles.div1content}>
              <div className={Styles.content}>
                <h1>Primer software SaaS <br />
                de gestion academica <br />
                para impulsar la <br />
                education superior</h1>
                <div className={Styles.buttons}>
                  <div className={Styles.button1}>Empieza ahora</div>
                  <div className={Styles.button2}>Por que Addemic</div>
                </div>
              </div>
            </div>
            <div className={Styles.images}>
              <img src={student} alt="" />
            </div>
          </div>
        </div>
        </>
    )
  }
}
