import { useRouteMatch, useParams } from "react-router-dom";

export default function PostData() {
  // console.log(match);
  const match = useRouteMatch();
  const params = useParams();
  return (
    <>
      <p> Post Page {params.id} !</p>
    </>
  );
}
