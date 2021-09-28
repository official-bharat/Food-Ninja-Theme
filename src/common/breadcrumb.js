import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Block, CustomButton, ImageComponent, Text} from '../components';
const Breadcrumb = ({title, subtitle}) => {
  const {goBack} = useNavigation();
  return (
    <Block padding={[hp(2), wp(5)]} flex={false}>
      <CustomButton
        onPress={() => goBack()}
        flex={false}
        margin={[0, 0, hp(3)]}
        borderRadius={15}
        center
        middle
        style={iconStyle}
        color="rgba(249, 168, 77,0.3)">
        <ImageComponent name="back_icon" height={16} width={10} />
      </CustomButton>
      <Text size={25} height={31} main>
        {title}
      </Text>
      <Text light size={14} height={19} margin={[hp(2), 0, 0]}>
        {subtitle}
      </Text>
    </Block>
  );
};
const iconStyle = {
  height: 40,
  width: 40,
};

export default Breadcrumb;
