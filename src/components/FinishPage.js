import React from "react";
import Button from "./Button";

export default function FinishPage({ dispatch, point }) {
  return (
    <div className="grid">
      <div>
        Quiz Completed <br /> <strong>You scored...</strong>
      </div>
      <div className="score-board">
        <section>
          <div className="score">{point}</div>
          <div>out of 100</div>
        </section>
        <Button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}
