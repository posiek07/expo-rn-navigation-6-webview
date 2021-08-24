import CardList from '../CardList';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import data from '../../../test-data/data.json';

it('CardList should render and match snapshot', async () => {
  const events = data.events;
  const cardList = renderer.create(<CardList item={events} />).toJSON();
  expect(cardList).toMatchSnapshot();
});
