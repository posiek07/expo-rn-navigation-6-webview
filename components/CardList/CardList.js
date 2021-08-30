import React from 'react';
import propTypes from 'prop-types';
import {StyledSafeAreaView, StyledFlatList} from './style';

const CardList = ({data, renderItem, keyExtractor}) => (
  <StyledSafeAreaView>
      <StyledFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
  </StyledSafeAreaView>
);

CardList.propTypes = {
  events: propTypes.array,
};

export default CardList;
