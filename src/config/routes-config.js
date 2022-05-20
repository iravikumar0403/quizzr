import { Homepage, Quiz, QuizCategories, Rules, Results } from "../pages";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/quizzes",
    element: <QuizCategories />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/quiz/:id",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
];
