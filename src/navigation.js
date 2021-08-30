import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './screens/AllNews';
import Display from './screens/Display';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="landing" component={LandingPage} />
        <Stack.Screen name="display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
