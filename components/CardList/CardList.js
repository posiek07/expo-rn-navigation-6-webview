import React from 'react';
import styled from 'styled-components/native';
import Card from '../Card/Card';
import propTypes from 'prop-types';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const StyledFlatList = styled.FlatList`
  display: flex;
`;

const CardList = ({events}) => (
  <StyledSafeAreaView>
    {!!events && (
      <StyledFlatList
        data={events}
        renderItem={props => <Card {...props} />}
        keyExtractor={item => item.url} // need to be unique (id's are the same in database)
      />
    )}
  </StyledSafeAreaView>
);

CardList.propTypes = {
  events: propTypes.array,
};

export default CardList;
