import { useReducer, useEffect } from "react";
import Header from "./Header";
import WelcomePage from "./WelcomePage";
import Main from "./Main";
const initialState = {
  quizzes: [],
  title: null,
  index: 0,
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, quizzes: action.payload, status: "ready" };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/quizzes")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => console.error("Error"));
  }, []);

  return (
    <div className="App">
      <div className="overlay">
        <Header />
        <Main>
          <WelcomePage />
        </Main>
      </div>
    </div>
  );
}

export default App;
