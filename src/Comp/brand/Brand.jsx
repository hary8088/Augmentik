import React, { Component } from 'react'
import Styles from "../brand/brand.module.css"
import microsoft from "../../Images/microsoft.png"
import aws from "../../Images/aws.png"
import oracle from "../../Images/Oracle.jpg"
import redhat from "../../Images/redhat.png"
export default class Brand extends Component {
  render() {
    return (
        <>
        <div className={Styles.main}>
             <div className={Styles.brand}>
                  <h1>Partners estrategicos</h1>
             </div>
             <div className={Styles.brands}>
                  <li><img src={microsoft} alt="Microsoft" width={250}/></li>
                  <li><img src={redhat} alt="Red Hat" width={250}/></li>
                  <li><img src={oracle} alt="Oracle" width={250}/></li>
                  <li><img src={aws} alt="AWS" width={250}/></li>
             </div>
        </div>
        </>
    )
  }
}
