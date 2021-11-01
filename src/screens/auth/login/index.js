import React from 'react';
import {ImageBackground} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../../../assets';
import {ImageComponent, Block, Text, Input, Button} from '../../../components';
import {RouteConstants} from '../../../utils/constants';

const LoginScreen = () => {
  const {colors, type} = useTheme();
  const {navigate} = useNavigation();
  const imageStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  return (
    <ImageBackground
      source={type === 'light' ? images.bg : images.bg_black}
      style={imageStyle}>
      <SafeAreaView>
        <Block flex={false} center>
          <ImageComponent
            name={type === 'light' ? 'logo' : 'logo_black'}
            height={203}
            width={188}
          />
          <Text main margin={[hp(6), 0, hp(2)]} size={20}>
            Login To Your Account
          </Text>
        </Block>
        <Block margin={[hp(3), wp(3)]} flex={false}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Text center main margin={[hp(2), 0, 0]} size={16}>
            Or Continue With
          </Text>
          <Block margin={[hp(1), 0, 0]} row space="around" flex={false}>
            <Button
              iconWithText
              icon="fb_icon"
              iconHeight={25}
              iconWidth={25}
              style={{width: wp(42)}}
              color="transparent">
              Facebook
            </Button>
            <Button
              iconWithText
              icon="google_icon"
              iconHeight={25}
              iconWidth={25}
              style={{width: wp(42)}}
              color="transparent">
              Google
            </Button>
          </Block>
          <Text
            medium
            margin={[hp(1), 0, 0]}
            secondary
            size={14}
            center
            underline>
            Forgot your password
          </Text>
          <Block margin={[hp(4), 0, 0]} center flex={false}>
            <Button style={{width: wp(40)}} linear color="primary">
              Login
            </Button>
          </Block>
          <Text
            onPress={() => navigate(RouteConstants.SIGNUP)}
            medium
            margin={[hp(1), 0, 0]}
            secondary
            size={14}
            center
            underline>
            Don&apos;t have an Account yet ? Signup
          </Text>
        </Block>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
