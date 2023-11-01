import { useEffect, useState } from "react";
import "./style.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Favoritos} from "./favoritos"; 

function App() {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch((error) => console.error("Error fetching joke:", error));
  };

  const handleJoke = (joke) => {
    const jokesNovo = [...favorites];
    jokesNovo.push(joke);
    setFavorites(jokesNovo);
    localStorage.setItem("favorites", JSON.stringify(jokesNovo));
    fetchJoke();
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Tem certeza que quer deletar?");
    if (confirmDelete) {
      const updatedFavorites = favorites.filter((_, i) => i !== index);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
      <div className="App">
        <h1>Chuck Norris Joke</h1>
        <Link to="/piadas">Piadas</Link>
        <Link to="/favoritos">Favoritos</Link>

              <div className="joke-item">
                <p className="joke-name">{joke}</p>
              </div>
              <button onClick={fetchJoke}>Nova Piada</button>
              <button onClick={() => handleJoke(joke)} className="favorite-button">
                Adicionar aos Favoritos <IoIosHeartEmpty className="heart-icon" />
              </button>
              <button onClick={clearFavorites}>Limpar Favoritos</button>
            </div>
         

        
  );
}

export default App;




