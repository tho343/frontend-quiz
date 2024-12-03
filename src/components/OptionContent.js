import React from "react";

export default function OptionContent({ quiz, answer, children, index }) {
  return (
    <div className="option-content">
      {answer && <div className="alphabet">{index + 1}</div>}
      {quiz && <img src={quiz?.icon} />}

      <div className="content">
        {quiz && quiz.title} {answer && answer}
      </div>
      {children}
    </div>
  );
}
