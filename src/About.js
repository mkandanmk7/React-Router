function About({ history }) {
  return (
    <>
      <p>About</p>
      <button onClick={history.goForward}>Go forward</button>
      <button onClick={history.goBack}>Go Back</button>
      <button onClick={() => history.push("/post")}>Go Push</button>

      <button onClick={() => history.replace("/post")}>Go replace</button>
    </>
  );
}
export default About;
