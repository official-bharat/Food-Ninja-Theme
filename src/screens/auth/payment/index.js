import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import Breadcrumb from '../../../common/breadcrumb';
import {Block, Button, CustomButton, ImageComponent} from '../../../components';
import {RouteConstants} from '../../../utils/constants';

const PaymentMethod = () => {
  const {navigate} = useNavigation();
  const {colors, type} = useTheme();
  const buttonStyle = {
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(3.5),
  };
  return (
    <Block safearea>
      <Breadcrumb
        title="Payment Method"
        subtitle={
          'This data will be displayed in your account \nprofile for security'
        }
      />
      <Block flex={false} padding={[0, wp(5)]}>
        <CustomButton
          borderRadius={15}
          shadow
          margin={[hp(2), 0, 0]}
          center
          middle
          style={buttonStyle}>
          <ImageComponent
            name={type === 'dark' ? 'paypal_black_icon' : 'paypal_icon'}
            width={76}
            height={20}
          />
        </CustomButton>
        <CustomButton
          borderRadius={15}
          margin={[hp(2), 0, 0]}
          shadow
          center
          middle
          style={buttonStyle}>
          <ImageComponent
            name={type === 'dark' ? 'visa_black_icon' : 'visa_icon'}
            width={50}
            height={16}
          />
        </CustomButton>
        <CustomButton
          borderRadius={15}
          margin={[hp(2), 0, 0]}
          center
          middle
          shadow
          style={buttonStyle}>
          <ImageComponent
            name={type === 'dark' ? 'payoneer_black_icon' : 'payoneer_icon'}
            width={67}
            height={24}
          />
        </CustomButton>
      </Block>
      <Block bottom margin={[hp(4), 0, 0]} center flex={1}>
        <Button
          onPress={() => navigate(RouteConstants.UPLOADPROFILE)}
          style={{width: wp(50)}}
          linear
          color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default PaymentMethod;
