import { useHistory, useLocation } from "react-router-dom";
import "./home.css";
function Home() {
  const history = useHistory();
  const Location = useLocation();
  return (
    <div className="home">
      <p>Home</p>
      <p>{Location.search}</p>
      <div className="btns">
        <button onClick={history.goForward}>Go forward</button>
        <button onClick={history.goBack}>Go back</button>
        <button onClick={() => history.push("/post")}>Go Push</button>

        <button onClick={() => history.replace("/post")}>Go replace</button>
      </div>
    </div>
  );
}

export default Home;
