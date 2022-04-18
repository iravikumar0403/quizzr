import { gql, useQuery } from "@apollo/client";
const App = () => {
  const FORM_QUERY = gql`
    query MyQuery {
      quizzr_quizzes {
        questions_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;
  const { loading, data, error } = useQuery(FORM_QUERY);
  console.log(loading, data, error?.graphQLErrors, error?.networkError);
  return <div>Hello</div>;
};

export default App;
