import React, { useState } from "react";
import Options from "./Options";
import Answers from "./Answers";
import Question from "./Question";
import Button from "./Button";
export default function QuizPage({
  question,
  dispatch,
  questionIndex,
  numsQuestion,
}) {
  return (
    <div className="grid">
      <Question>
        <>
          <p>
            Question {questionIndex + 1} of {numsQuestion}
          </p>
          <div>{question.question}</div>
          <progress max={numsQuestion} value={questionIndex} />
        </>
      </Question>
      <Answers
        answers={question.options}
        correctAnswer={question.answer}
        dispatch={dispatch}
        questionIndex={questionIndex}
        numsQuestion={numsQuestion}
      />
    </div>
  );
}
