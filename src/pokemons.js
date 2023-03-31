const container = document.getElementById("pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((pokemon) => {
    pokemon.forEach((pokemon) => {
      const pokemonElement = document.createElement("div");
      pokemonElement.innerHTML = `
        <h2>${pokemon.title}</h2>
        <p>${pokemon.body}</p>
      `;
      container.appendChild(pokemonElement);
    });
  })
  .catch((error) => console.log(error));
