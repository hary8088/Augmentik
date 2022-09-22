import React, { Component } from 'react'
import Styles from "../email/email.module.css"
export default class Email extends Component {
  render() {
    return (
        <>
         <div className={Styles.main}>
            <div className={Styles.overlay}>
              <h1>Descarga la guia de las mejores prcticas <br />
               en gestion academica</h1>
               <div className={Styles.send}>
                <input type="text" placeholder="Email...."/>
                <h3>Descargar</h3>
               </div>
            </div>
            <div className={Styles.mail}>
              
            </div>
         </div>
        </>
    )
  }
}
