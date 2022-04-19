import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducers/quiz-reducer";

const QuizContext = createContext();
const useQuiz = () => useContext(QuizContext);

const initialState = {
  questionIndex: 0,
  quiz_id: "",
  answers: null,
};

const QuizProvider = ({ children }) => {
  const [{ questionIndex, quiz_id, answers }, dispatch] = useReducer(
    quizReducer,
    initialState
  );
  return (
    <QuizContext.Provider value={{ questionIndex, quiz_id, answers, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { useQuiz, QuizProvider };
