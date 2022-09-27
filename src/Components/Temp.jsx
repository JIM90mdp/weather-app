import React from 'react'
import styles from "../Components/App.module.css";

export default function Temp({label,value}) {
    return (
        <div className = {styles.temp}>
            <span className = {styles.tempLabel} >{label}</span>
            <span className = {styles.tempValue} >{value}</span>
        </div>
    )
}