import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import Splash from '../screens/splash';
import Intro from '../screens/intro';
import IntroSecond from '../screens/intro2';
import {Dark, Default, RouteConstants} from '../utils/constants';
import LoginScreen from '../screens/auth/login';
import SignupScreen from '../screens/auth/signup';
import Bio from '../screens/auth/bio';
import PaymentMethod from '../screens/auth/payment';
import UploadProfile from '../screens/auth/upload-profile';
import PreviewPhoto from '../screens/auth/upload-profile/preview';
import Congrats from '../screens/auth/congrats';

const Stack = createNativeStackNavigator();

function Routes() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? Dark : Default}>
      <Stack.Navigator
        initialRouteName={RouteConstants.SPLASH}
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
        <Stack.Screen name={RouteConstants.SIGNUP} component={SignupScreen} />
        <Stack.Screen name={RouteConstants.BIO} component={Bio} />
        <Stack.Screen
          name={RouteConstants.PAYMENTMETHOD}
          component={PaymentMethod}
        />
        <Stack.Screen
          name={RouteConstants.UPLOADPROFILE}
          component={UploadProfile}
        />
        <Stack.Screen name={RouteConstants.PREVIEW} component={PreviewPhoto} />
        <Stack.Screen name={RouteConstants.CONGRATS} component={Congrats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
