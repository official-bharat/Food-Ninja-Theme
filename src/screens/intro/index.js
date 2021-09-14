import {useTheme} from '@react-navigation/native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {ImageComponent, Block} from '../../components';

const Intro = () => {
  const {colors, type} = useTheme();
  return (
    <Block primary>
      <Block flex={false} padding={[heightPercentageToDP(6), 0, 0]}>
        <ImageComponent
          name={type === 'dark' ? 'intro_black' : 'intro_white'}
          width={409}
          height={435}
        />
      </Block>
    </Block>
  );
};

export default Intro;
