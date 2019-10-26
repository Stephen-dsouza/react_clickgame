import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Main from "./components/main/main";
import Characters from "./characters.json";
import Wrapper from "./components/Wrapper";
class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    guessClick: [],
    message: "Click to start"
  };
  clickcard = data => {
    console.log("CLICKED", data);
  };
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <Wrapper>
          {Characters.map(character => (
            <Main
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.clickcard}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
