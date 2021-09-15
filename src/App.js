import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";

function App() {
  return (
    <>
      <h1>Router</h1>

      <BrowserRouter>
        <div>
          <NavLink exact activeStyle={{ color: "green" }} to="/">
            Home
          </NavLink>
          <NavLink activeStyle={{ color: "green" }} to="/about">
            About
          </NavLink>
          <NavLink activeClass="active" to="/post">
            Post
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
