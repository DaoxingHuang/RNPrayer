import * as React from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

const DetailsPage = () => {
  let source =
    Platform.OS === 'android'
      ? 'file:///android_asset/index.html'
      : 'demoh5.bundle/index.html';

  return <WebView 
  originWhitelist={['*']}
  allowFileAccess={true} // 允许通过 file://的形式加载资源
  javaScriptEnabled={true}
  setAllowFileAccessFromFileURLs={true}
  setAllowUniversalAccessFromFileURLs={true} 
  source={{uri: source}} />;
};

export default DetailsPage;
