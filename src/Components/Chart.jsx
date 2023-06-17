import React from "react";
import "../App.css";
import BrushChart from "./BrushChart";

const Chart = ({data}) => {
  console.log(data);
  return (
    <React.Fragment>
      
      <BrushChart data={data} />

    </React.Fragment>
  );
}

export default Chart