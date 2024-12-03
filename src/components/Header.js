import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import OptionContent from "./OptionContent";

export default function Header({ quizzes, quizId }) {
  const pickedQuestions = quizzes?.find((item) => item.id === quizId);

  return (
    <header>
      <OptionContent quiz={pickedQuestions} />

      <ThemeSwitcher size="24" />
    </header>
  );
}
