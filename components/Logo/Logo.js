import React from 'react';
import {StyledCardImage} from './style';

const Logo = ({logo}) => {
  return <StyledCardImage source={{uri: logo}} />;
};

export default Logo;
