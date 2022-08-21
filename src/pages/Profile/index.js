import * as React from 'react';
import { View, Text, Button } from 'react-native';

const ProfilePage = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
    <Button
        onPress={() => navigation.push('Webview')}
        title="Webview"
        />
  </View>
);
  export default ProfilePage