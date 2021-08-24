import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EventsListScreen from '../screens/EventsListScreen/EventsListScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen/EventDetailsScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsListScreen"
        component={EventsListScreen}
        options={{title: 'Events'}}
      />
      <Stack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
        options={{
          title: 'Event Details',
        }}
      />
    </Stack.Navigator>
  );
}
