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
          id: item.id,
        })
      }>
      <StyledCard>
        <StyledCardImageWrapper>
          <StyledCardImage
            accessibilityLabel={'image: ' + item.title}
            source={{uri: item.logoUrl}}
            alt={item.logoUrl}
          />
        </StyledCardImageWrapper>
        <StyledTextWrapper>
          <StyledDateText numberOfLines={1}>
            {moment(item.startDate).format('LLLL z')}
          </StyledDateText>
          <StyledTitleText numberOfLines={2}>{item.title}</StyledTitleText>
          <StyledDescriptionText numberOfLines={1}>
            {item.descriptionText}
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
