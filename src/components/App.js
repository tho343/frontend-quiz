import { useReducer, useEffect } from "react";
import Header from "./Header";
import WelcomePage from "./WelcomePage";
import Main from "./Main";
import QuizPage from "./QuizPage";
import FinishPage from "./FinishPage";
const initialState = {
  quizzes: [],
  questions: [],
  quizId: 0,
  questionIndex: 0,
  status: "loading",
  point: 0,
  answerPicked: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, quizzes: action.payload, status: "ready" };
    case "quizPicked":
      const pickedQuestions = state.quizzes.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        questions: pickedQuestions.questions,
        quizId: action.payload,
        status: "active",
      };

    case "submitAnswer":
      const correctAnswer = state.questions[state.questionIndex].answer;
      const isCorrect = correctAnswer === action.payload;

      return { ...state, point: isCorrect ? state.point + 10 : state.point };
    case "nextQuestion":
      return { ...state, questionIndex: state.questionIndex++ };
    case "finish":
      return { ...state, status: "finish" };
    case "reset":
      return { ...initialState, quizzes: state.quizzes, status: "ready" };
  }
}
function App() {
  const [
    { quizzes, quizId, status, questions, questionIndex, point },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/quizzes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => console.error("Error"));
  }, []);

  return (
    <div className="App">
      <Header quizzes={quizzes} quizId={quizId} />
      <Main>
        {status === "active" && (
          <QuizPage
            question={questions[questionIndex]}
            dispatch={dispatch}
            questionIndex={questionIndex}
            numsQuestion={questions.length}
          />
        )}
        {status === "ready" && (
          <WelcomePage quizzes={quizzes} dispatch={dispatch} />
        )}
        {status === "finish" && (
          <FinishPage dispatch={dispatch} point={point} />
        )}
      </Main>
    </div>
  );
}

export default App;
