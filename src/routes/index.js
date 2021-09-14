import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import {useColorScheme} from 'react-native';
import Intro from '../screens/intro';

const Stack = createNativeStackNavigator();

const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFFFF',
  },
  type: 'light',
};
const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#0D0D0D',
  },
  type: 'dark',
};
function Routes() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? Dark : Default}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
