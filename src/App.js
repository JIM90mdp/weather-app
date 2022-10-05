import React, { useState } from 'react';

import Header from "./Components/Header";
import Nav from "./Components/Nav/Nav.jsx"
// import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import Cards from "./Components/Cards/Cards.jsx";

import styles from "./Components/App.module.css";


function App() {
  const [cities, setCities] = useState('');

  function onSearch(ciudad) {
    //haciendo un request de tipo Get a la url "4ae2636d8dfbdc3044bede63951a019b" pasandole la ciudad,
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      //como el fetch es una promesa, despues tenemos que definier el then: donde obtememos la respuesta y esa respuesta la pasamos a un objeto de javascript
      // ¿¿¿ como es el formato de ese res? para que lo pasamos a javascript y cuando usamos ese codigo transformado ???
      .then(res => res.json())
      //y recien ahi obtener la ciudad... la promesa. then, genera una funciòn flecha, donde city es la viudad que recive por parametro el onSearch
      // ¿¿¿ city viene a ser el nombre del archivo que está en la appi mediante el cual accedemos a sus parametros?  Como lo explicarías? 
      .then(city => {
        const ciudad = {
          min: Math.round(city.main.temp_min),
          max: Math.round(city.main.temp_max),
          img: city.weather[0].icon,
          id: city.id,
          wind: city.wind.speed,
          temp: city.main.temp,
          name: city.name,
          weather: city.weather[0].main,
          clouds: city.clouds.all,
          latitud: city.coord.lat,
          longitud: city.coord.lon
        };
        setCities(cities => [...cities, ciudad]);
      })
  }
  function onClose(id) {
    // setCities vuelve a modificar las ciudades, pero va a filtrar las ciudad, de modo tal que al recibis una ciudad con su propio id y filtra el arreglo de las ciudades y renderiza el resto
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }
  return (
    <div className={styles.app}>
      <div >
        <Header>
            <Nav
              onSearch={onSearch}
            />
        </Header>
      </div>
      <section className={styles.reelCities}>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </section>
    </div>
  );
}

export default App;
