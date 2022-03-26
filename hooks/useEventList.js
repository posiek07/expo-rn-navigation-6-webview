import {useQuery, gql} from '@apollo/client';

const GET_EVENTS = gql`
  query listEvents {
    listEvents {
      items {
        id
        title
        descriptionText
        logoUrl
        startDate
      }
    }
  }
`;

const useEventList = () => {
  const {error, loading, data} = useQuery(GET_EVENTS);
  const events = data && data.listEvents.items;

  return {loading, error, events};
};

export default useEventList;
