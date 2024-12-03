import React, { useState } from "react";
import OptionContent from "./OptionContent";
import { ReactComponent as CorrectIcon } from "../icon/icon-correct.svg";
export default function Answer({
  answer,
  onClick,
  isSubmit,
  picked,
  correctAnswer,
  index,
}) {
  const isPicked = picked === answer;
  const isCorrect = answer === correctAnswer;

  return (
    <button
      className={`answer ${
        isPicked
          ? `picked ${isSubmit ? (isCorrect ? "green" : "red") : ""}`
          : ""
      }  disabled`}
      onClick={() => onClick(answer)}
      disabled={isSubmit}
    >
      <OptionContent answer={answer} index={index}>
        {isSubmit && isCorrect && <CorrectIcon />}
      </OptionContent>
    </button>
  );
}
