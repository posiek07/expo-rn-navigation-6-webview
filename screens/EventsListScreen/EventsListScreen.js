import React from 'react';
import {View, Text} from 'react-native';
import CardList from '../../components/CardList/CardList';
import useFetchedEvents from '../../hooks/useFetchedEvents';

const EventsListScreen = () => {
  const {events, error} = useFetchedEvents();

  if (error) {
    return <Text>ERROR</Text>;
  }

  if (events) {
    return <CardList events={events} />;
  } else {
    return (
      <View>
        <Text>LOADING</Text>
      </View>
    );
  }

  
};

export default EventsListScreen;
