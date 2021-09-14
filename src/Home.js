function Home({ history }) {
  return (
    <>
      <p>Home</p>
      <button onClick={history.goBack}>Go forward</button>
      <button onClick={history.goForward}>Go backward</button>
      <button onClick={history.push("/post")}>Go push</button>
      <button onClick={history.replace("/post")}>Go replace</button>
    </>
  );
}

export default Home;
