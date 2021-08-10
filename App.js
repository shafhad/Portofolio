import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ScreenOrientation } from 'expo';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
      
        source={{ uri: 'https://karanaggarwal2008.github.io/Portofolio-for-amazon-app-store/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
