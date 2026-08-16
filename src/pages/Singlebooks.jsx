import React from "react";
import { useParams } from "react-router-dom";

const Singlebooks = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Singlebooks</div>;
};

export default Singlebooks;
