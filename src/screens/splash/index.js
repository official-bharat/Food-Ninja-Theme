import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';
import {images} from '../../assets';
import {ImageComponent} from '../../components';
import {RouteConstants} from '../../utils/constants';

const Splash = () => {
  const {colors, type} = useTheme();
  const {navigate} = useNavigation();
  const imageStyle = {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    setTimeout(() => {
      navigate(RouteConstants.INTRO);
    }, 3000);
  }, []);
  return (
    <>
      <ImageBackground
        source={type === 'light' ? images.bg : images.bg_black}
        style={imageStyle}>
        <ImageComponent
          name={type === 'light' ? 'logo' : 'logo_black'}
          height={203}
          width={188}
        />
      </ImageBackground>
    </>
  );
};

export default Splash;
