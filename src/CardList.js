import React from "react";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon, i) => {
        return (
          <Card
            key={i}
            id={pokemons[i].id}
            name={pokemons[i].name}
            ability={pokemons[i].ability}
          />
        );
      })}
    </div>
  );
};

export default CardList;
