import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from 'react';
import Characters from "./components/Characters";

function App() {

  const [characters, setCraracters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    console.log(characterApi);
    setCraracters(characterApi.results);
  }

  // console.log(character);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCraracters={setCraracters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
