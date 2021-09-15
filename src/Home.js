function Home({ history }) {
  return (
    <>
      <p>Home</p>
      <button onClick={history.goForward}>Go forward</button>
      <button onClick={history.goBack}>Go back</button>
      <button onClick={() => history.push("/post")}>Go Push</button>

      <button onClick={() => history.replace("/post")}>Go replace</button>
    </>
  );
}

export default Home;
