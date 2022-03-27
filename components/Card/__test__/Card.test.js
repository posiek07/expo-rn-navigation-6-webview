import Card from '../Card';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import data from '../../../test-data/data.json';
import {render} from 'react-native-testing-library';
import {exact} from 'prop-types';

it.skip('should render and match snapshot', () => {
  const event = data.events[0];
  const card = renderer.create(<Card item={event} />).toJSON();
  expect(card).toMatchSnapshot();
});

it.skip('should render with title and image', async () => {
  const event = data.events[0];
  const {getByText, findByLabelText} = render(<Card item={event} />);

  const title = getByText('Evolving Design Systems');

  expect(title).toBeTruthy();

  const image = await findByLabelText('image: ' + data.events[0].name.text);

  expect(image).toBeTruthy();
});
