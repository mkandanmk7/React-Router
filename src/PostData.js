import React from "react";

export default function PostData({ match }) {
  console.log(match.params);
  return (
    <>
      <p> Post Page !</p>
    </>
  );
}
