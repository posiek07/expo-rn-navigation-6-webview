import Card from '../Card';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import data from '../../../test-data/data.json';

it('Card should render and match snapshot', async () => {
  const event = data.events[0];
  const card = renderer.create(<Card item={event} />).toJSON();
  expect(card).toMatchSnapshot();
});
