import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import Breadcrumb from '../../../common/breadcrumb';
import {
  Block,
  Button,
  CustomButton,
  ImageComponent,
  Text,
} from '../../../components';
import {RouteConstants} from '../../../utils/constants';

const UploadProfile = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const buttonStyle = {
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(3.5),
  };
  return (
    <Block safearea>
      <Breadcrumb
        title={'Upload Your Photo \nProfile'}
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
          <ImageComponent name="gallery_icon" width={50} height={50} />
          <Text main margin={[hp(2), 0, 0]}>
            From Gallery
          </Text>
        </CustomButton>
        <CustomButton
          borderRadius={15}
          margin={[hp(2), 0, 0]}
          shadow
          center
          middle
          style={buttonStyle}>
          <ImageComponent name="camera_icon" width={50} height={50} />
          <Text main margin={[hp(2), 0, 0]}>
            Take Photo
          </Text>
        </CustomButton>
      </Block>
      <Block bottom margin={[hp(4), 0, 0]} center flex={1}>
        <Button
          onPress={() => navigate(RouteConstants.PREVIEW)}
          style={{width: wp(50)}}
          linear
          color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default UploadProfile;
