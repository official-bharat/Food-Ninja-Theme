import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Platform, StyleSheet, TextInput} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
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
      shadowColor: type === 'dark' ? 'transparent' : '#F6F8FD',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4.65,

      elevation: 2,
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
          center={center ? true : false}
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
