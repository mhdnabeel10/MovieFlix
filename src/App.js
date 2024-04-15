import React from "react";
import NavBar from "./components/NavBar/NavBar";
import {Originals,Action, ComedyMovies, HorrorMovies, RomanceMovies,Documentaries} from './Urls'
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'  />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />


    </div>
  );
}

export default App;
