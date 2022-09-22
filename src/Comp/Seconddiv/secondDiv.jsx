import React, { Component } from 'react'
import Styles from "../Seconddiv/secondDive.module.css"
import {BiArea} from "react-icons/bi"
import {BsPeopleFill} from "react-icons/bs"
import {MdOutlineVerifiedUser} from "react-icons/md"
import {GiCycle} from "react-icons/gi"
import {IoTimerOutline} from "react-icons/io5"
import {FaGraduationCap} from "react-icons/fa"
export class secondDiv extends Component {
  render() {
    return (
        <>
        <div className={Styles.main}>
            <h1>Principales Charactersticas</h1>
            <div className={Styles.features}>
                <div className={Styles.list} >
                    <BiArea size={150} color="#eab676"/>
                    <div className={Styles.li}>Flexible y disenado para integrase
                        con las principles plataformas</div>
                </div>
                <div className={Styles.list}>
                    <BsPeopleFill size={150} color="rgb(118,181,197)"/>
                    <div className={Styles.li}>Implemtation y disenado para integrase
                        con las principles plataformas
                        </div>
                </div>
                <div className={Styles.list}>
                    <MdOutlineVerifiedUser size={150} color="rgb(118,181,197)"/>
                    <div className={Styles.li}>La implementation y disenado para integrase
                        con las principles plataformas
                    </div>
                </div>
                <div className={Styles.list}>
                    <GiCycle size={150} color="#C3BEBD" />
                    <div className={Styles.li}>solution y disenado para integrase
                        con las principles plataformas
                    </div>
                </div>
                <div className={Styles.list}>
                    <IoTimerOutline size={150} color="#C3BEBD"/>
                    <div className={Styles.li}>Flexible y disenado para integrase
                        con las principles plataformas
                    </div>
                </div>
                <div className={Styles.list}>
                    <FaGraduationCap size={150} color="#eab676"/>
                    <div className={Styles.li}>Flexible y disenado para integrase
                        con las principles plataformas
                    </div>
                </div>
            </div>
        </div>
        </>
    )
  }
}

export default secondDiv