import React from 'react';
import {View, Text} from 'react-native';
import CardList from '../../components/CardList/CardList';
import Card from '../../components/Card/Card';
import useEventList from '../../hooks/useEventList';

const EventsListScreen = () => {
  const {error, loading, events} = useEventList();

  if (loading) {
    return (
      <View>
        <Text>LOADING</Text>
      </View>
    );
  }

  if (error) {
    return <Text>ERROR: {error.message}</Text>;
  }

  return (
    <CardList
      data={events}
      renderItem={(props) => <Card {...props} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventsListScreen;
