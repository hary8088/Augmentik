import React, { Component } from 'react'
import Styles from "../calculator/calculator.module.css"
import Slider from '@mui/material/Slider';
function valuetext(value: number) {
    return `${value}°C`;
  }
  

export default class calculator extends Component {
  render() {
    return (
        <>
        <div className={Styles.main}>
        <h1>Calculatora Addemic</h1>
        <div className={Styles.cont}>
            <div className={Styles.divs}>
               <h3>Pais</h3>
               <select name="Country" id="country">
                <option value="">--Select--</option>
                <option value="Colobia">Colombia</option>
                <option value="India">India</option>
                <option value="England">England</option>
                <option value="USA">USA</option>
               </select>
            </div>
            <div className={Styles.divs}>
                <h3>Cantidad de alumnos</h3>
                <div className={Styles.slider}>
                    <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} 
                    valueLabelDisplay="auto" step={1} marks min={10} max={100}/>
                </div>
                <div className={Styles.checkbox}>
                    <li><input type="checkbox"/></li>
                    <li> Tengo mas de 100 alumnos</li>
                </div>
             </div>
            <div className={Styles.divs}>
               <h3>Plazo de contrato</h3>
                <div className={Styles.slider}>
                    <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} 
                    valueLabelDisplay="auto" step={1} marks min={10} max={100}/>
                </div>
            </div>
            <div className={Styles.divs}>
                <h3>Addons e Integraciones</h3>
                <div className={Styles.checkbox}>
                    <li><input type="checkbox"/></li>
                    <li> Tengo mas de 100 alumnos</li>
                </div>
                <div className={Styles.checkbox}>
                    <li><input type="checkbox"/></li>
                    <li> Tengo mas de 100 alumnos</li>
                </div>
            </div>
            <div className={Styles.divs}>
                <h3>Integraciones</h3>
                <div className={Styles.checkbox}>
                    <li><input type="checkbox"/></li>
                    <li> Tengo mas de 100 alumnos</li>
                </div>
            </div>
        </div>
        <div className={Styles.buttons}>
            <div className={Styles.button1}>Valor Total : $4.25</div>
            <div className={Styles.button2}>Empizea ahora</div>
        </div>
        </div>
        </>
    )
  }
}
