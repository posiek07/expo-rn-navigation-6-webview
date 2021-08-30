import React from 'react';
import propTypes from 'prop-types';
import {StyledBookButton, StyledBookButtonText} from './style'

const Button = ({onPress}) => {
  return (
    <StyledBookButton>
      <StyledBookButtonText
        onPress={onPress}
        accessibilityLabel="Book Ticket">
        Book Ticket
      </StyledBookButtonText>
    </StyledBookButton>
  );
};

Button.propTypes = {
  url: propTypes.string,
};

export default Button;
