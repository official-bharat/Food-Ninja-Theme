import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Block, Button, ImageComponent, Text} from '../../../components';
import {RouteConstants} from '../../../utils/constants';
import {useNavigation} from '@react-navigation/core';
import {ImageBackground} from 'react-native';
import {images} from '../../../assets';

const Congrats = () => {
  const {navigate} = useNavigation();
  const {colors, type} = useTheme();
  const imageStyle = {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(5),
  };
  return (
    <ImageBackground
      source={type === 'light' ? images.bg : images.bg_black}
      style={imageStyle}>
      <Block flex={false} />
      <Block center middle flex={false} padding={[hp(5), wp(5)]}>
        <ImageComponent name="congrats_icon" width={172} height={162} />
        <Text secondary bold size={25} margin={[hp(3), 0, hp(3)]}>
          Congrats!
        </Text>
        <Text size={23} main>
          Your Profile Is Ready To Use
        </Text>
      </Block>
      <Block bottom margin={[hp(4), 0, 0]} center flex={false}>
        <Button
          onPress={() => navigate(RouteConstants.PREVIEW)}
          style={{width: wp(50)}}
          linear
          color="primary">
          Next
        </Button>
      </Block>
    </ImageBackground>
  );
};

export default Congrats;
