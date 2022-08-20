import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.push('Details')}
        title="Go to details"
        />
    </View>
  );

  export default HomePage