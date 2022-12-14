import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import RootTabs from './src/router/rootTabs';
import DetailsPage from './src/pages/Detail';
import WebviewPage from './src/pages/Webview'

const Stack = createStackNavigator();

function App({navigation, route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={RootTabs} />
        <Stack.Screen name="Details" component={DetailsPage} />
        <Stack.Screen name="Webview" component={WebviewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;