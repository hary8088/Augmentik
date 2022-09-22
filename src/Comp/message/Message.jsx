import React, { Component } from 'react'
import Styles from "../message/message.module.css"
export default class Message extends Component {
  render() {
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.message}>
                    <div className={Styles.content1}>
                        <h1><b>`` Con Addemic se evita perder <br />
                        tiempo en procesos <br />
                        administrartive, enfocandose <br />
                        en el principal objjetivo <br />
                        traspasar conocimiento. ``</b></h1>
                    </div>
                    <div className={Styles.content2}>
                        <li><b>Carmen Gloria</b></li>
                        <li>Ex Vicerrectora Academica de DUOC</li>
                        <li><b>Actual Head of Research by Addemic</b></li>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
