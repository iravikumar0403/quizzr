import { gql, useQuery } from "@apollo/client";

const FETCH_CATEGORIES = gql`
  query getQuizzes {
    quizzr_quizzes {
      description
      id
      media
      questions_aggregate {
        aggregate {
          count
        }
      }
      title
      created_at
      updated_at
    }
  }
`;

export const useQuizCategories = () => {
  const { loading, data, error } = useQuery(FETCH_CATEGORIES);

  let formattedData;
  if (data) {
    formattedData = data.quizzr_quizzes.map((quiz) => {
      const {
        created_at,
        description,
        id,
        media,
        title,
        updated_at,
        questions_aggregate: {
          aggregate: { count },
        },
      } = quiz;

      return {
        id,
        created_at,
        updated_at,
        description,
        media,
        title,
        no_of_questions: count,
      };
    });
  }
  return { loading, data: formattedData, error };
};
