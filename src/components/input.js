import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Platform, StyleSheet, TextInput} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CustomButton, ImageComponent} from './index';
import Block from './Block';
import Button from './CustomButton';
import Text from './Text';
import {t1} from './theme/fontsize';

const componentStyles = (colors, type) => {
  return StyleSheet.create({
    label: {
      marginBottom: heightPercentageToDP(0.8),
    },
    input: {
      paddingVertical:
        Platform.OS === 'ios'
          ? heightPercentageToDP(2)
          : heightPercentageToDP(0.3),
      paddingHorizontal: widthPercentageToDP(3),
      borderWidth: 1,
      borderColor: type === 'dark' ? 'transparent' : '#F4F4F4',
      borderRadius: 10,
      fontSize: 14,
      color: colors.inputColor,
      backgroundColor: colors.inputBackground,
      shadowColor: type === 'dark' ? 'transparent' : 'rgba(90, 108, 234,0.3)',

      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    toggle: {
      // position: 'absolute',
      // alignItems: 'flex-end',
      // width: 16 * 2,
      // height: 16 * 2,
      // top: 16,
      // right: 0,
    },
  });
};

const Input = ({
  email,
  rightLabel,
  label,
  phone,
  number,
  secure,
  error,
  style,
  rightStyle,
  onRightPress,
  placeholder,
  errorText,
  editable = true,
  center,
  placeholderTextColor,
  leftPrefix,
  rightPrefix,
  iconWithInput,
  iconHeight = 14,
  iconWidth = 14,
  iconColor,
  rightIconOnPress,
  ...rest
}) => {
  const {colors, type} = useTheme();
  const styles = componentStyles(colors, type);
  const [toggleSecure, setToggleSecure] = useState(false);
  const renderLabel = () => (
    <Block flex={false}>
      {label ? (
        <Text
          errorColor={errorText}
          size={14}
          center={!!center}
          style={styles.label}
          black={!error}
          accent={error}
          color="#636363">
          {label}
        </Text>
      ) : null}
    </Block>
  );

  const renderToggle = () => {
    if (!secure) {
      return null;
    }
    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure({toggleSecure: !toggleSecure})}>
        {/* {rightLabel || (
          <Icon
            color={'#000'}
            size={14}
            name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )} */}
      </Button>
    );
  };

  const renderRight = () => {
    if (!rightLabel) {
      return null;
    }

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const isSecure = toggleSecure ? false : secure;

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  const inputStyles = [
    styles.input,
    !editable && {
      backgroundColor: '#e9ecef',
      color: '#9c9c9c',
      borderColor: '#e9ecef',
    },
    error && {borderColor: 'red', color: 'red'},
    style,
  ];

  if (iconWithInput) {
    return (
      <Block
        style={inputStyles}
        flex={false}
        margin={[heightPercentageToDP(1), 0]}
        row
        space="between">
        <Block flex={false} row>
          <Block flex={false} margin={[0, widthPercentageToDP(4), 0, 0]}>
            <ImageComponent
              name={leftPrefix}
              height={iconHeight}
              width={iconWidth}
              color={iconColor}
            />
          </Block>
          <TextInput
            placeholder={placeholder}
            style={{width: widthPercentageToDP(72), color: colors.inputColor}}
            secureTextEntry={isSecure}
            autoComplete="off"
            autoCapitalize="none"
            editable={editable}
            autoCorrect={false}
            keyboardType={inputType}
            placeholderTextColor={errorText ? 'red' : colors.inputColor}
          />
        </Block>
        <CustomButton flex={false} onPress={rightIconOnPress}>
          <ImageComponent
            name={rightPrefix}
            height={iconHeight}
            width={iconWidth}
            color={iconColor}
          />
        </CustomButton>
      </Block>
    );
  }
  return (
    <Block flex={false} margin={[heightPercentageToDP(1), 0]}>
      {renderLabel()}
      <TextInput
        placeholder={placeholder}
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        editable={editable}
        autoCorrect={false}
        keyboardType={inputType}
        placeholderTextColor={errorText ? 'red' : colors.inputColor}
        {...rest}
      />
      {errorText && error && (
        <Text margin={[t1, 0, 0, 0]} size={12} errorColor>
          {errorText}
        </Text>
      )}
      {renderToggle()}
      {renderRight()}
    </Block>
  );
};

export default Input;
