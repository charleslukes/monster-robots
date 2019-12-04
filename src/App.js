import React, { Component } from "react";
import { MonsterList } from "./components/card-lists/card-list.component";
import axios from "axios";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const monsters = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ monsters: monsters.data });
  }

  handleChange = e => this.setState({ searchField: e.target.value });
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monster Rodex</h1>
        <SearchBox placeholder="search" handleChange={this.handleChange} />
        <MonsterList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
