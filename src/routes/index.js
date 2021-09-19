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
import IntroSecond from '../screens/intro2';
import {RouteConstants} from '../utils/constants';
import LoginScreen from '../screens/login';

const Stack = createNativeStackNavigator();

const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFFFF',
    text: '#09051C',
    subtitle: '#000000',
    inputBackground: '#FFFFFF',
    inputColor: '#3B3B3B',
  },
  type: 'light',
};
const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#0D0D0D',
    text: '#FFFFFF',
    subtitle: '#FFFFFF',
    inputBackground: '#252525',
    inputColor: '#FFFFFF',
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
        <Stack.Screen name={RouteConstants.SPLASH} component={Splash} />
        <Stack.Screen name={RouteConstants.INTRO} component={Intro} />
        <Stack.Screen
          name={RouteConstants.INTROSECOND}
          component={IntroSecond}
        />
        <Stack.Screen name={RouteConstants.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
