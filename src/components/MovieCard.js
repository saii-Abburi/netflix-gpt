import React, { useState } from "react";
import TotalCard from "./TotalCard";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ img, movie, imgtotal }) => {
  const [showTotalCard, setShowTotalCard] = useState(false);

  const handleImageClick = () => {
    setShowTotalCard(true);
  };

  const handleClose = () => {
    setShowTotalCard(false);
  };

  return (
    <li>
      <div className="moviecard">
        <img
          src={IMG_CDN_URL + img}
          alt="Movie Poster"
          onClick={handleImageClick}
        />
      </div>

      {showTotalCard && (
        <div className="total-card-container">
          <button onClick={handleClose} className="close-button">
            X
          </button>
          <TotalCard img={imgtotal ? imgtotal : img} movie={movie} />
        </div>
      )}
    </li>
  );
};
export default MovieCard;
