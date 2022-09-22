import React from 'react'
import Styles from "./main.module.css"
import SecondDiv from "../Seconddiv/secondDiv"
import Brand from "../brand/Brand"
import Footer from "../Footer/Footer"
import Email from "../email/Email"
import Message from '../message/Message'
import Calculator from "../calculator/calculator"
import About from "../about/about"
function main() {
  return (
    <>
    <div className={Styles.main}>
        <About/>
        <SecondDiv/>
        <Calculator/>
        <Message/>
        <Email/>
        <Brand/>
        <Footer/>
    </div>
    </>
  )
}

export default main