import React from "react";

import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Main from "./components/main/main";
import Characters from "./characters.json";
import Wrapper from "./components/Wrapper";
class App extends React.Component {
  //Set the state  of state,topscore,guess clicked id,message
  state = {
    score: 0,
    topScore: 0,
    guessClick: [],
    message: "Click to start"
  };
  //Handle a correct guess on click
  handleCorrectGuess = newData => {
    //Capture the state  for score and top score
    const { topScore, score } = this.state;
    //Increase the score
    const newScore = score + 1;
    //check if the score is greater than top score ans set the state
    const newTopScore = Math.max(newScore, topScore);
    this.setState({
      score: newScore,
      topScore: newTopScore
    });
  };
  // Handle incorrect guess.These are id that have been previously clicked and exist in the array
  handleIncorrectGuess = newData => {
    this.setState({
      score: 0,
      guessClick: [],
      message: "You lost,Try Again"
    });
  };
  //On click fuction
  clickcard = id => {
    //capture the current state of array of all images that havebeen clicked
    let guessClick = this.state.guessClick;
    //use the find method to find if the clicked image id exists in the array
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
