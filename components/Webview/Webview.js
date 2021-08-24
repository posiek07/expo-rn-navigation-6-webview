import React from 'react';
import styled from 'styled-components';
import WebView from 'react-native-webview';
import propTypes from 'prop-types';

const StyledActivityIndicatior = styled.ActivityIndicator`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Webview = ({html}) => {
  return (
    <>
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
    </>
  );
};

Webview.propTypes = {
  html: propTypes.string,
};

export default Webview;
