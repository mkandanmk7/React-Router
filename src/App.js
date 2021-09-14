import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";

function App() {
  return (
    <>
      <h1>Router</h1>

      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/post">Post</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route Path="/post" component={Post} />
          <Route Path="/about" component={About} />
          <Route Path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
