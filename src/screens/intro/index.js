import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ImageComponent, Block, Text, Button} from '../../components';

const Intro = () => {
  const {type} = useTheme();
  return (
    <Block primary>
      <Block flex={false} padding={[heightPercentageToDP(6), 0, 0]}>
        <ImageComponent
          name={type === 'dark' ? 'intro_black' : 'intro_white'}
          width={409}
          height={435}
        />
      </Block>
      <Text main center size={30} height={40}>
        Find your Comfort {'\n'} Food here
      </Text>
      <Text
        margin={[heightPercentageToDP(3), 0, 0]}
        size={16}
        height={22}
        light
        center>
        Here You Can find a chef or dish for every {'\n'} taste and color.
        Enjoy!
      </Text>
      <Block margin={[heightPercentageToDP(4), 0, 0]} center flex={false}>
        <Button linear style={{width: widthPercentageToDP(40)}} color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default Intro;
