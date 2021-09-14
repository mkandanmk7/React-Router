import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";

function App() {
  return (
    <>
      <h1>Router</h1>

      <BrowserRouter>
        <a href="/">Home</a>
        <a href="/post">Post</a>
        <a href="/about">About</a>
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
