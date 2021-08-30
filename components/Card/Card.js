import React from 'react';
import {TouchableOpacity} from 'react-native';
import moment from 'moment-timezone';
import {useNavigation} from '@react-navigation/native';
import propTypes from 'prop-types';
import {
  StyledCard,
  StyledTextWrapper,
  StyledTitleText,
  StyledDescriptionText,
  StyledDateText,
  StyledCardImageWrapper,
  StyledCardImage,
} from './style';

const Card = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EventDetailsScreen', {
          event: item,
        })
      }>
      <StyledCard>
        <StyledCardImageWrapper>
          <StyledCardImage
            accessibilityLabel={'image: ' + item.name.text}
            source={{uri: item.logo.url}}
            alt={item.logo.url}
          />
        </StyledCardImageWrapper>
        <StyledTextWrapper>
          <StyledDateText numberOfLines={1}>
            {moment(item.start.utc).tz(item.start.timezone).format('LLLL z')}
          </StyledDateText>
          <StyledTitleText numberOfLines={2}>{item.name.text}</StyledTitleText>
          <StyledDescriptionText numberOfLines={1}>
            {item.description.text}
          </StyledDescriptionText>
        </StyledTextWrapper>
      </StyledCard>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  item: propTypes.object,
};

export default Card;
