import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../pages/Home';
import ProfilePage from '../pages/Profile';

const Tab = createBottomTabNavigator();

function RootTabs({navigation, route}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default RootTabs;
