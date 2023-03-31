import React from "react";

const Card = ({ name, ability, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="pokemons"
        src={`https://pokeapi.co/api/v2/pokemon/${id}?200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{ability}</p>
      </div>
    </div>
  );
};

export default Card;
