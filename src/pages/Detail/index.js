import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const DetailsPage = () => (
  <WebView
        source={{uri: 'https://www.baidu.com'}}
      />
);

  export default DetailsPage