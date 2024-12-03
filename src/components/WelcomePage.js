import React from "react";
import Options from "./Options";
export default function WelcomePage({ dispatch, quizzes }) {
  return (
    <div className="grid">
      <div className="welcome">
        <h1>
          Welcome to the <br /> <span>Frontend Quiz!</span>
        </h1>
        <p>
          <em>Pick a subject to get started</em>
        </p>
      </div>
      <div className="right">
        <Options options={quizzes} dispatch={dispatch} />
      </div>
    </div>
  );
}
