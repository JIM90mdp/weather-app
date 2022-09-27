import React from 'react';
import Card from './Card'
import styles from "./SearchBar.module.css";


export default function Cards({cities}) {
  return (
    <div className = {styles.cards}>
      {cities.map(city => (
        <Card
          id = {city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  )
};