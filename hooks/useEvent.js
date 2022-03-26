import {useQuery, gql} from '@apollo/client';

const useEvent = (id) => {
  const GET_EVENT = gql`
query getEvent {
  getEvent(id: "${id}") {
    id
    url
    descriptionHTML
    logoUrl
  }
}
`;

  const {error, loading, data} = useQuery(GET_EVENT);
  const event = data && data.getEvent;

  return {loading, error, event};
};

export default useEvent;
