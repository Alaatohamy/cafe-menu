import React from "react";
import { Header, MenuList } from "components";
import { Container } from "styles/general";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <MenuList />
      </Container>
    </div>
  );
}

export default App;
