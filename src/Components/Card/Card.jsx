import React from 'react';
import Temp from '../Temp';
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card({max, min, name, img, onClose, id}) {
  console.log("cartitaaaaaaa")
  return (
    <div className = {styles.card}>
      <button onClick={onClose}  className = {styles.cardBtn}> X </button>
      <Link className = {styles.link} to={`/ciudad/${id}`}>
      <div className = {styles.cardName}>{name}</div>
      </Link>
      <section>
        <Temp label= "Min" value= {min}/>
        <Temp label= "Max" value= {max}/>
        <img 
        src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} 
        alt="Icono"
        />
      </section>
    </div>
  )
};