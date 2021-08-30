import React from 'react';
import WebView from 'react-native-webview';
import propTypes from 'prop-types';
import {StyledActivityIndicatior} from './style';

const Webview = ({html}) => {
  return (
    <WebView
      scalesPageToFit={false}
      startInLoadingState={true}
      originWhitelist={['*']}
      source={{
        html: `<html>
        <head>
        <style>
        body {padding-bottom: 20%}
        img {max-width: 100%; object-fit: contain}
        </style>
        </head>
        <body>${html}</body>
        </html>`,
      }}
      containerStyle={{margin: 10}}
      renderLoading={() => (
        <StyledActivityIndicatior color="black" size="large" />
      )}
    />
  );
};

Webview.propTypes = {
  html: propTypes.string,
};

export default Webview;
