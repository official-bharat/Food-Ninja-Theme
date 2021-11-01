import {useTheme, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ImageComponent, Block, Text, Button} from '../../components';
import {RouteConstants} from '../../utils/constants';

const IntroSecond = () => {
  const {type} = useTheme();
  const {navigate} = useNavigation();
  return (
    <Block primary>
      <Block flex={false} padding={[heightPercentageToDP(6), 0, 0]}>
        <ImageComponent
          name={type === 'dark' ? 'intro2_black' : 'intro2_white'}
          width={409}
          height={435}
        />
      </Block>
      <Text main center size={25} height={33}>
        Food Ninja is Where Your {'\n'} Comfort Food Lives
      </Text>
      <Text
        margin={[heightPercentageToDP(3), 0, 0]}
        size={16}
        height={22}
        light
        center>
        Enjoy a fast and smooth food delivery at {'\n'} your doorstep
      </Text>
      <Block margin={[heightPercentageToDP(4), 0, 0]} center flex={false}>
        <Button
          onPress={() => navigate(RouteConstants.LOGIN)}
          linear
          style={{width: widthPercentageToDP(40)}}
          color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default IntroSecond;
