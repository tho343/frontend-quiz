import React from "react";
import Option from "./Option";
export default function Options({ dispatch, options }) {
  return (
    <div className="options">
      {options.map((item, i) => (
        <Option quiz={item} key={i} dispatch={dispatch} />
      ))}
    </div>
  );
}
