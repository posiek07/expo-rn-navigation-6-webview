import useSWR from 'swr';

const useFetchedEvents = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const {data, error} = useSWR(
    'https://thedistance.co.uk/wp-content/uploads/2020/01/eventbrite.json',
    fetcher,
  );

  const events = !!data && data.events;

  return {events, error};
};

export default useFetchedEvents;
