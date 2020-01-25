import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  inputChangedHandler = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search avatar"
          onChange={this.inputChangedHandler}
        />
        <CardList monsters={filteredMonsters} />
        {/* {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        <button
          onClick={() =>
            this.setState({
              monsters: [
                {
                  name: "frankenstein2",
                  id: 1
                },
                {
                  name: "jason",
                  id: 2
                }
              ]
            })
          }
        >
          Change State
        </button> */}
      </div>
    );
  }
}

export default App;
