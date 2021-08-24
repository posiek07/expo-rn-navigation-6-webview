import Logo from '../Logo';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

it('Logo should render and match snapshot', async () => {
  const url = 'https://picsum.photos/200'; // random image
  const logoImage = renderer.create(<Logo logo={url} />).toJSON();
  expect(logoImage).toMatchSnapshot();
});
