import React, { Component } from 'react'
import Styles from "../Footer/Footer.module.css"
import img from "../../Images/idea.png";

export default class Footer extends Component {
  render() {
    return (
        <>
        <div className={Styles.main}>
            <div className={Styles.left}>
                <div className={Styles.image}>
                   <img src={img} alt="Academic "/>
                </div>
                <div className={Styles.brandName}>
                   <li>Addemic</li>
                   <li>By Ozma Global Service</li>
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.lis}>
                    <li>Enlaces utiles</li>
                    <li>Ozmo Global Services</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Privacidad</li>
                </div>
                <div className={Styles.lis}>
                    <li>Addemic</li>
                    <li>Compania</li>
                    <li>Solucion</li>
                </div>
            </div>
        </div>
        </>
    )
  }
}
