import React from 'react';
import Navigation from './navigation/index';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://y5r3u5232fakxnc353rbtjdyvm.appsync-api.eu-west-1.amazonaws.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "da2-frbj2qpdvjh6bptdholrtw7kqi",
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
