import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react';
import 'react-native-gesture-handler';
import NativeGesture from './NativeGesture';
import { SCREEN_NAME } from './src/SCREEN_NAME';
import Menu from './src/Menu';

const Stack = createStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator headerMode={'none'} >
      <Stack.Screen name={SCREEN_NAME.MENU} component={Menu} />
      <Stack.Screen name={SCREEN_NAME.NATIVE_GESTURE} component={NativeGesture} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App