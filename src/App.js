import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: "",
    };
  }
}

componentDidMount();
{
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((pokemon) => this.setState({ pokemons: pokemon }));
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value });
};

export default App;
