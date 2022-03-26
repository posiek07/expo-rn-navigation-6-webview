import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Webview from '../../components/Webview/Webview';
import {View, Text, Linking} from 'react-native';
import useEvent from '../../hooks/useEvent';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  width: 100%;
`;

const EventDetailsScreen = (props) => {
  const id = props.route.params.id;
  const {error, loading, event} = useEvent(id);

  if (loading)
    <View>
      <Text>LOADING</Text>
    </View>;

  if (error) {
    return <Text>ERROR: {error.message}</Text>;
  }

  return (
    <StyledSafeAreaView>
      <Logo logo={event?.logoUrl} />
      <Webview html={event?.descriptionHTML} />
      <Button onPress={() => Linking.openURL(event?.url)} />
    </StyledSafeAreaView>
  );
};

export default EventDetailsScreen;
