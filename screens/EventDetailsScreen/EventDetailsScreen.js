import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Webview from '../../components/Webview/Webview';
import {Linking} from 'react-native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  width: 100%;
`;

const EventDetailsScreen = props => {
  const html = props.route.params.event.description.html;
  const url = props.route.params.event.url;
  const logo = props.route.params.event.logo.original.url;
  return (
    <StyledSafeAreaView>
      <Logo logo={logo} />
      <Webview html={html} />
      <Button onPress={() => Linking.openURL(url)} />
    </StyledSafeAreaView>
  );
};

export default EventDetailsScreen;
