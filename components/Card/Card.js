import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment-timezone';
import {useNavigation} from '@react-navigation/native';
import propTypes from 'prop-types';

const StyledCard = styled.View`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;
  padding: 2%;
`;

const StyledTextWrapper = styled.View`
  display: flex;
  width: 70%;
  padding-left: 2%;
  justify-content: space-between;
`;

const StyledTitleText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const StyledDescriptionText = styled.Text`
  color: grey;
`;

const StyledDateText = styled.Text`
  color: #e85d04;
  font-size: 11px;
  font-weight: 700;
  margin: 3px;
`;

const StyledCardImageWrapper = styled.View`
  background-color: black;
  width: 100px;
  height: 100px;
`;

const StyledCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

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
          <StyledCardImage source={{uri: item.logo.url}} alt={item.logo.url} />
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
