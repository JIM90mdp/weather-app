import React from 'react';
import Card from '../Card/Card'
import styles from "./Cards.module.css";


export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={styles.cards}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            //forma de pasar el onClose desde Cards
            onClose={() => onClose(c.id)}
            //o le paso el onClose a card y desde la Card ejectuar el onClose con el id
            //onClose={onClose}
            key={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}