import React, { useState } from "react";
import Answer from "./Answer";
import Button from "./Button";
export default function Answers({
  answers,
  dispatch,
  correctAnswer,
  questionIndex,
  numsQuestion,
}) {
  const [pickedAnswer, setPickedAnswer] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  function handleOnClick(answer) {
    setPickedAnswer(answer);
  }
  function handleSubmit() {
    setIsSubmit(true);
    dispatch({ type: "submitAnswer", payload: pickedAnswer });
  }
  function handleNext() {
    setIsSubmit(false);
    dispatch({ type: "nextQuestion" });
  }
  function handleFinish() {
    dispatch({ type: "finish" });
  }
  return (
    <>
      <div>
        {answers.map((item, i) => (
          <Answer
            onClick={handleOnClick}
            key={i}
            answer={item}
            picked={pickedAnswer}
            isSubmit={isSubmit}
            correctAnswer={correctAnswer}
            index={i}
          />
        ))}
        {isSubmit ? (
          questionIndex < numsQuestion - 1 ? (
            <Button onClick={handleNext}>Next Question</Button>
          ) : (
            <Button onClick={handleFinish}>Finish</Button>
          )
        ) : (
          <Button onClick={handleSubmit}>{"Submit Answer"}</Button>
        )}
      </div>
    </>
  );
}
