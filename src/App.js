import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import Card from "./Components/Card/Card.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import data, { Cairns } from './data.js';

import styles from "./Components/App.module.css";

function App() {
  return (
    <div className = {styles.app}>
      <div >
        <Header>
          <SearchBar />
        </Header>
      </div>
      <main className = {styles.main}>
        <section className = {styles.mainCity}>
          <Card
            max = {Cairns.main.temp_max}
            min = {Cairns.main.temp_min}
            name = {Cairns.name}
            img = {Cairns.weather[0].icon}
            onClose = {() => alert(Cairns.name)}
            main = {true}
          />
        </section>
        <section className = {styles.reelCities}>
          <Cards
            cities={data}
          />
        </section>
      </main>
  </div>
  );
}

export default App;
