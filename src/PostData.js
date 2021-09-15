import React from "react";

export default function PostData({ match }) {
  console.log(match);
  return (
    <>
      <p> Post Page {match.params.id} !</p>
    </>
  );
}
