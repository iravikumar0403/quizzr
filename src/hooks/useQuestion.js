import { gql, useQuery } from "@apollo/client";

export const useQuestion = (id) => {
  const FETCH_QUESTION = gql`
    query MyQuery($id: uuid!) {
      quizzr_quizzes_by_pk(id: $id) {
        id
        title
        questions {
          question
          options
          id
        }
      }
    }
  `;
  const { loading, data, error } = useQuery(FETCH_QUESTION, {
    variables: {
      id,
    },
  });

  const questions = data?.quizzr_quizzes_by_pk.questions;

  return { loading, data: questions, error };
};
