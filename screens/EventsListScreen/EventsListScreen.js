import React from 'react';
import {View, Text} from 'react-native';
import CardList from '../../components/CardList/CardList';
import Card from '../../components/Card/Card';
import useFetchedEvents from '../../hooks/useFetchedEvents';

const EventsListScreen = () => {
  const {events, error} = useFetchedEvents();

  if (error) {
    return <Text>ERROR: {error.message}</Text>;
  }

  if (events) {
    return (
      <CardList
        data={events}
        renderItem={(props) => <Card {...props} />}
        keyExtractor={(item) => item.url} // need to be unique (id's duplicate in provided database)
      />
    );
  } else {
    return (
      <View>
        <Text>LOADING</Text>
      </View>
    );
  }
};

export default EventsListScreen;
