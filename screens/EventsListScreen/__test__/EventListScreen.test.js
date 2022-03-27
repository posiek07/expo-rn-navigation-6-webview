import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';
import EventsListScreen from '../EventsListScreen';
import {mock_error, mock_response} from './mock';

it('should render list of events and contain Snoop Dog event', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mock_response} addTypename={false}>
      <EventsListScreen />
    </MockedProvider>,
  );
  await new Promise((resolve) => setTimeout(resolve, 100));

  const tree = component.toJSON();
  expect(JSON.stringify(tree.children[0])).toContain('Snoop Dog');
});

it('should render error message', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[mock_error]} addTypename={false}>
      <EventsListScreen />
    </MockedProvider>,
  );
  await new Promise((resolve) => setTimeout(resolve, 100));

  const tree = component.toJSON();
  expect(tree.children[1]).toContain('GET_EVENTS-error');
});

it('should render loading message', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[mock_error]} addTypename={false}>
      <EventsListScreen />
    </MockedProvider>,
  );
  const tree = component.toJSON();
  expect(JSON.stringify(tree.children)).toContain('LOADING');
});
