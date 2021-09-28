import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import {images} from '../../../assets';
import {ImageComponent, Block, Text, Input, Button} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RouteConstants} from '../../../utils/constants';
import Checkbox from '../../../components/checkbox';
const SignUpScreen = () => {
  const [toggle, setToggle] = useState({
    eye: true,
    keep: false,
    email: false,
  });
  const {colors, type} = useTheme();
  const {goBack, navigate} = useNavigation();
  const imageStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };
  const checkboxStyle = {
    height: 20,
    width: 20,
  };

  const labelStyle = {
    color: colors.inputColor,
    fontFamily: 'BentonSans-Book',
    fontSize: 12,
    opacity: 0.5,
  };

  const containerStyle = {
    marginTop: hp(1),
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
            Sign Up For Free
          </Text>
        </Block>
        <Block margin={[hp(3), wp(4)]} flex={false}>
          <Input
            iconWithInput
            leftPrefix={'username_icon'}
            iconHeight={20}
            iconWidth={20}
            placeholder="Username"
          />
          <Input
            iconWithInput
            leftPrefix={'email_icon'}
            iconHeight={20}
            iconWidth={20}
            placeholder="Email"
          />
          <Input
            iconWithInput
            leftPrefix={'password_icon'}
            iconHeight={20}
            iconWidth={20}
            placeholder="Password"
            rightPrefix={type === 'light' ? 'eye_icon' : 'eye_icon_black'}
            rightIconOnPress={() =>
              setToggle({
                ...toggle,
                eye: !toggle.eye,
              })
            }
            secure={toggle.eye}
          />
          <Checkbox
            containerStyle={containerStyle}
            labelStyle={labelStyle}
            checkboxStyle={checkboxStyle}
            label="Keep Me Signed In"
            checked={toggle.keep}
            onChange={() =>
              setToggle({
                ...toggle,
                keep: !toggle.keep,
              })
            }
          />
          <Checkbox
            containerStyle={containerStyle}
            labelStyle={labelStyle}
            checkboxStyle={checkboxStyle}
            label="Email Me About Special Pricing"
            checked={toggle.email}
            onChange={() =>
              setToggle({
                ...toggle,
                email: !toggle.email,
              })
            }
          />
          <Block margin={[hp(4), 0, 0]} center flex={false}>
            <Button
              onPress={() => navigate(RouteConstants.BIO)}
              style={{width: wp(50)}}
              linear
              color="primary">
              Create Account
            </Button>
          </Block>

          <Text
            onPress={() => goBack()}
            medium
            secondary
            margin={[hp(1), 0, 0]}
            size={14}
            center
            underline>
            Already have an account?
          </Text>
        </Block>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUpScreen;
