/* CON LA METODOLOGÏA DE CSS MODULE LO QUE LOGRAS ES TENER EL ESTILO GUARDADO INDIVIDUALMENTE EN CADA COMPONENTE, NO IMPORTA SI TENES DOS SEARCHBAR DIFERENTES, CADA UNO TENDRA SU PROPIO CSS MODULE*/
import React, { useState } from "react";
import { Route } from 'react-router-dom';
import styles from "./SearchBar.module.css";
import { BsSearch } from 'react-icons/bs';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form className = {styles.searchBar} onSubmit = { (e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <Route path="/">
        <BsSearch className = {styles.icon} />
        <input className = {styles.input} 
        type = "text"
        placeholder = "buscar..." 
        onChange = {e => setCity(e.target.value)}
        value = {city}
        />
        <button 
        onClick = {() => onSearch("Buscando ciudad...")}
        className = {styles.submit} 
        type = "submit" 
        style={{cursor: "pointer" }} /* esta es una manera de aplicar estilo en el propio elemento de html, una forma rapida/veloz de hacerlo, es codigo JS asique no se puede usar un aline-items porque sería aline - (menos) items, la forma correcta es alineItems, y tampoco se pueden usar pseudo clases, siempre va entre llaves porque ahi metes un objeto con todos los estilos que quieras meter */
        > 
        buscar 
        </button>
      </Route>
    </form>
  )
}