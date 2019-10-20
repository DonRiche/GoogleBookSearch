import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import About from "./pages/about";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;