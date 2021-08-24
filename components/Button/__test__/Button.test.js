import Button from '../Button';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

it('should find the button via Text', async () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
