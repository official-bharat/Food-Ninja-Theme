import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Breadcrumb from '../../../common/breadcrumb';
import {Block, Button, Input} from '../../../components';
import {RouteConstants} from '../../../utils/constants';
const Bio = () => {
  const {navigate} = useNavigation();
  return (
    <Block safearea>
      <Breadcrumb
        title={'Fill in your bio to get \nstarted'}
        subtitle={
          'This data will be displayed in your account \nprofile for security'
        }
      />
      <Block flex={false} padding={[0, wp(5)]}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Mobile Number" />
      </Block>
      <Block bottom margin={[hp(4), 0, 0]} center flex={1}>
        <Button
          onPress={() => navigate(RouteConstants.PAYMENTMETHOD)}
          style={{width: wp(50)}}
          linear
          color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default Bio;
