import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const RouteConstants = {
  SPLASH: 'Splash',
  INTRO: 'Intro',
  INTROSECOND: 'IntroSecond',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  BIO: 'Bio',
  PAYMENTMETHOD: 'PaymentMethod',
  UPLOADPROFILE: 'UploadProfile',
  PREVIEW: 'Preview',
  CONGRATS: 'Congrats',
};
export const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FEFEFF',
    text: '#09051C',
    subtitle: '#000000',
    inputBackground: '#FFFFFF',
    inputColor: '#3B3B3B',
  },
  type: 'light',
};
export const Dark = {
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
