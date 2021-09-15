function Post({ history, location }) {
  console.log(history);
  console.log(location.search);

  return (
    <>
      <p>Posts</p>
      <p>{location.search}</p>
      <button onClick={history.goBack}>Go Back</button>
      <button onClick={history.goForward}>Go Forward</button>
    </>
  );
}
export default Post;
