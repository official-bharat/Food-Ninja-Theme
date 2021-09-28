import React from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import Block from './Block';
import Text from './Text';
import {light} from './theme/colors';
import {t1, t2} from './theme/fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ImageComponent} from '.';
import {useTheme} from '@react-navigation/native';

const componentStyles = (colors, type) => {
  return StyleSheet.create({
    button: {
      borderRadius: 10,
      justifyContent: 'center',
      marginVertical: t2,
      paddingVertical: t1 * 1.5,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    circular: {
      borderRadius: 20,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    disabledButton: {
      backgroundColor: '#00000052',
      borderWidth: 0,
    },
    accent: {backgroundColor: 'red'},
    primary: {backgroundColor: '#000', paddingVertical: t1 * 2.5},
    secondary: {
      backgroundColor: light.secondary,
      paddingVertical: t1 * 1.5,
    },
    transparent: {
      backgroundColor: colors.inputBackground,
      paddingVertical: t1 * 1.5,
      borderColor: type === 'dark' ? 'transparent' : '#F4F4F4',
      borderWidth: 1,
      shadowColor: type === 'dark' ? 'transparent' : '#F6F8FD',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4.65,

      elevation: 2,
    },
  });
};

const Button = ({
  style,
  opacity,
  gradient,
  color,
  startColor,
  endColor,
  end,
  start,
  locations,
  shadow,
  children,
  icon,
  circular,
  size,
  isLoading,
  disabled,
  borderColor,
  linear,
  iconStyle,
  iconWithText,
  iconHeight,
  iconWidth,
  iconColor,
  textStyle,
  ...rest
}) => {
  const {colors, type} = useTheme();
  const styles = componentStyles(colors, type);

  const buttonStyles = [
    styles.button,
    borderColor && {borderColor},
    disabled && shadow && styles.shadow,
    circular && styles.circular,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style,
  ];

  const colorType = type => {
    switch (type) {
      case 'secondary':
        return '#fff';
      case 'transparent':
        return light.secondary;
      case 'primary':
        return '#fff';
    }
  };

  // start 53E88B

  if (linear) {
    return (
      <TouchableOpacity
        activeOpacity={disabled ? opacity || 0.8 : 0.2}
        disabled={!!disabled}
        {...rest}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={disabled ? ['#302a2e', '#302a2e'] : ['#53E88B', '#15BE77']}
          style={[buttonStyles, disabled && styles.disabledButton]}
          activeOpacity={disabled ? opacity || 0.8 : 0.2}
          {...rest}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text bold center regular h1 size={size || 17} color={'white'}>
              {children}
            </Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  if (iconWithText) {
    return (
      <TouchableOpacity
        style={[
          buttonStyles,
          disabled && styles.disabledButton,
          {paddingVertical: heightPercentageToDP(2)},
        ]}
        disabled={!!disabled}
        activeOpacity={disabled ? opacity || 0.8 : 0.2}
        {...rest}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Block flex={false} center middle row>
            <Block flex={false} style={iconStyle}>
              <ImageComponent
                name={icon}
                height={iconHeight}
                width={iconWidth}
                color={iconColor}
              />
            </Block>
            <Text
              medium
              style={textStyle}
              center
              h1
              size={size || 16}
              margin={[
                heightPercentageToDP(0.3),
                0,
                0,
                widthPercentageToDP(3),
              ]}>
              {children}
            </Text>
          </Block>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[buttonStyles, disabled && styles.disabledButton]}
      disabled={!!disabled}
      activeOpacity={disabled ? opacity || 0.8 : 0.2}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text medium center h1 size={size || 16}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: '#FFF',
};

export default Button;
