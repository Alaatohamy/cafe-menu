import React from "react";
import { Route } from "react-router-dom";
import { Header, MenuList, AddMenuForm, EditMenuItem } from "components";
import { Container } from "styles/general";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Route exact path="/" component={MenuList} />
        <Route exact path="/create-new-item" component={AddMenuForm} />
        <Route path="/edit-menu-item/:itemId" component={EditMenuItem} />
      </Container>
    </div>
  );
}

export default App;
