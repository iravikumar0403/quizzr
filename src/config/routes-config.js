import { QuizCategories } from "../pages";
import { Homepage } from "../pages/Homepage";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/quizzes",
    element: <QuizCategories />,
  },
];
