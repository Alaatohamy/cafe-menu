import React from "react";
import { Route } from "react-router-dom";
import { Header, MenuList, AddMenuForm } from "components";
import { Container } from "styles/general";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Route exact path="/" component={MenuList} />
        <Route exact path="/create-new-item" component={AddMenuForm} />
      </Container>
    </div>
  );
}

export default App;
