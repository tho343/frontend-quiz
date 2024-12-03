import React from "react";
import OptionContent from "./OptionContent";
export default function Option({ quiz, dispatch }) {
  function handleOnClick() {
    dispatch({ type: "quizPicked", payload: quiz.id });
  }
  return (
    <div className="option" onClick={handleOnClick}>
      <OptionContent quiz={quiz} />
    </div>
  );
}
