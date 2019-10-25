import React from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Main from "./components/main/main";
import Characters from "./characters.json";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Wrapper>
        {Characters.map(character => (
          <Main
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
