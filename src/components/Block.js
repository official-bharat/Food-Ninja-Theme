import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Animated, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {light} from './theme/colors';

const componentStyles = (colors) => {
  return StyleSheet.create({
    block: {
      flex: 1,
    },
    baseline: {
      alignItems: 'baseline',
    },
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    center: {
      alignItems: 'center',
    },
    middle: {
      justifyContent: 'center',
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      alignItems: 'flex-end',
    },
    top: {
      justifyContent: 'flex-start',
    },
    bottom: {
      justifyContent: 'flex-end',
    },
    borderColor: {
      borderColor: '#0000001F',
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    primary: {backgroundColor: colors.background},
    secondary: {backgroundColor: light.secondary},
  });
};

const Block = ({
  safearea,
  padding,
  margin,
  flex,
  row,
  column,
  center,
  middle,
  left,
  right,
  top,
  bottom,
  shadow,
  color,
  space,
  animated,
  wrap,
  style,
  children,
  white,
  primary,
  secondary,
  borderWidth,
  borderRadius,
  borderColor,
  borderColorDeafult,
  alignSelf,
  baseline,
  ...rest
}) => {
  const {colors, type} = useTheme();

  const styles = componentStyles(colors, type);
  const handleMargins = () => {
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }
    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  };
  const handleBorderWidth = () => {
    if (typeof borderWidth === 'number') {
      return {
        borderWidth,
      };
    }
    if (typeof borderWidth === 'object') {
      const borderSize = Object.keys(borderWidth).length;
      switch (borderSize) {
        case 1:
          return {
            borderTopWidth: borderWidth[0],
            borderRightWidth: borderWidth[0],
            borderBottomWidth: borderWidth[0],
            borderLeftWidth: borderWidth[0],
          };
        case 2:
          return {
            borderTopWidth: borderWidth[0],
            borderRightWidth: borderWidth[1],
            borderBottomWidth: borderWidth[0],
            borderLeftWidth: borderWidth[1],
          };
        case 3:
          return {
            borderTopWidth: borderWidth[0],
            borderRightWidth: borderWidth[1],
            borderBottomWidth: borderWidth[2],
            borderLeftWidth: borderWidth[1],
          };
        default:
          return {
            borderTopWidth: borderWidth[0],
            borderRightWidth: borderWidth[1],
            borderBottomWidth: borderWidth[2],
            borderLeftWidth: borderWidth[3],
          };
      }
    }
  };

  const handleBordersRadius = () => {
    if (typeof borderRadius === 'number') {
      return {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      };
    }
    if (typeof borderRadius === 'object') {
      const border_Radius = Object.keys(borderRadius).length;
      switch (border_Radius) {
        case 1:
          return {
            borderTopLeftRadius: borderRadius[0],
            borderTopRightRadius: borderRadius[0],
            borderBottomLeftRadius: borderRadius[0],
            borderBottomRightRadius: borderRadius[0],
          };
        case 2:
          return {
            borderTopLeftRadius: borderRadius[0],
            borderTopRightRadius: borderRadius[1],
            borderBottomLeftRadius: borderRadius[0],
            borderBottomRightRadius: borderRadius[1],
          };
        case 3:
          return {
            borderTopLeftRadius: borderRadius[0],
            borderTopRightRadius: borderRadius[1],
            borderBottomLeftRadius: borderRadius[2],
            borderBottomRightRadius: borderRadius[1],
          };
        default:
          return {
            borderTopLeftRadius: borderRadius[0],
            borderTopRightRadius: borderRadius[1],
            borderBottomLeftRadius: borderRadius[2],
            borderBottomRightRadius: borderRadius[3],
          };
      }
    }
  };

  const handlePaddings = () => {
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
  };
  const blockStyles = [
    styles.block,
    white && {backgroundColor: '#fff'},
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    baseline && styles.baseline,
    alignSelf && {alignSelf},
    wrap && {flexWrap: 'wrap'},
    borderColor && !styles[color] && {borderColor},
    borderColorDeafult && styles.borderColor,
    secondary && styles.secondary,
    margin && {...handleMargins()},
    padding && {...handlePaddings()},
    borderWidth && {...handleBorderWidth()},
    borderRadius && {...handleBordersRadius()},
    primary && styles.primary,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style, // rewrite predefined styles
  ];

  if (animated) {
    return (
      <Animated.View {...rest} style={blockStyles}>
        {children}
      </Animated.View>
    );
  }
  if (safearea) {
    return (
      <SafeAreaView {...rest} style={[blockStyles]}>
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View {...rest} style={blockStyles}>
      {children}
    </View>
  );
};
Block.propTypes = {
  // flex: PropTypes.number,
  // grow: PropTypes.number,
  // shrink: PropTypes.number,
  // style: PropTypes.object,
  safearea: PropTypes.bool,
  flex: PropTypes.bool,
  row: PropTypes.bool,
  column: PropTypes.bool,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  space: PropTypes.oneOf(['between', 'around']),
  animated: PropTypes.bool,
  wrap: PropTypes.bool,
};

Block.defaultProps = {
  safearea: false,
  flex: true,
  row: false,
  column: true,
  center: false,
  middle: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  shadow: false,
  color: '',
  space: '',
};
export default Block;
