import Button from '../Button';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { render, fireEvent } from "react-native-testing-library";

it('should render and match snapshot', async () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});


it('check if button fire', () => {
  const mockFn = jest.fn()

  const { getByText } = render(<Button onPress={mockFn}/>)
  
  const button = getByText("Book Ticket")

  fireEvent.press(button)

  expect(mockFn).toBeCalled()

})