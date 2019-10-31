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
    message: "Click to start",
    Characters
  };

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    this.setState({
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = newData => {
    this.setState({
      score: 0,
      guessClick: [],
      message: "You lost,Try Again"
    });
  };

  clickcard = id => {
    console.log(id);

    let guessClick = this.state.guessClick;
    let guessed = guessClick.find(item => {
      return item === id;
    });
    if (guessed) {
      this.handleIncorrectGuess();
    } else {
      guessClick.push(id);

      this.setState({
        guessClick: guessClick,
        message: "Good Guess"
      });
      this.handleCorrectGuess();
    }

    // message: "Good Guess",
    //   topScore:
    //     this.setState.score > this.state.topScore
    //       ? this.state.topScore
    //       : this.topScore

    // }
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />

        <Wrapper>
          {Characters.sort(() => 0.5 - Math.random()).map(character => (
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
