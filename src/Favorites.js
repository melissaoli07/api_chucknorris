import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

function Favorites({ favorites, handleDelete }) {
  return (
    <div className="favorites-list">
        <h2>
          Lista de favoritos <IoIosHeartEmpty className="heart-icon" />
        </h2>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((favorite, index) => (
              <li key={index}>
                {favorite}
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma piada favorita.</p>
        )}
      </div>
  );
}

export default Favorites;
