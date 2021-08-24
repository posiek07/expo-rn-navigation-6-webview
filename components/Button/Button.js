import React from 'react';
import styled from 'styled-components';
import {Linking} from 'react-native';
import propTypes from 'prop-types';

const StyledBookButton = styled.View`
  background-color: #e85d04;
  height: 5%;
  width: 80%;
  position: absolute;
  bottom: 6%;
  left: 10%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const StyledBookButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Button = ({url}) => {
  return (
    <StyledBookButton>
      <StyledBookButtonText
        onPress={() => {
          Linking.openURL(url);
        }}
        accessibilityLabel="Press me">
        Book Ticket
      </StyledBookButtonText>
    </StyledBookButton>
  );
};

Button.propTypes = {
  url: propTypes.string,
};

export default Button;
