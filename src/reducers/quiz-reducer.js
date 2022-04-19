export const quizReducer = (state, { type, payload }) => {
  switch (type) {
    case "ANSWER":
      return {
        ...state,
        quiz_id: payload.quiz_id,
        answers: {
          ...state.answers,
          [payload.question_id]: payload.selectedAnswer,
        },
      };
    case "NEXT":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    case "PREVIOUS":
      return {
        ...state,
        questionIndex: state.questionIndex - 1,
      };
    case "CLEAR":
      return {
        questionIndex: 0,
        quiz_id: "",
        answers: null,
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
