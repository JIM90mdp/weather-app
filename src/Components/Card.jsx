import React from 'react';
import Temp from './Temp';
import styles from "./SearchBar.module.css";

export default function Card({max, min, name, img, onClose, main}) {
  return (
    <div className = {styles.card}>
      <button onClose={onClose} className = {styles.cardBtn}>X</button>
      <div className = {styles.cardName}>{name}</div>
      <section>
        <Temp label= "Min" value= {min}/>
        <Temp label= "Max" value= {max}/>
        <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
        alt="Icono"
        />
      </section>
    </div>
  )
};