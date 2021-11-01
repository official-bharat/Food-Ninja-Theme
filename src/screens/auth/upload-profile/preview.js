import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import Breadcrumb from '../../../common/breadcrumb';
import {Block, Button, ImageComponent} from '../../../components';
import {RouteConstants} from '../../../utils/constants';

const PreviewPhoto = () => {
  const {navigate} = useNavigation();
  return (
    <Block safearea>
      <Breadcrumb
        title={'Upload Your Photo \nProfile'}
        subtitle={
          'This data will be displayed in your account \nprofile for security'
        }
      />
      <Block center middle flex={false} padding={[hp(5), wp(5)]}>
        <ImageComponent name="photo_icon" width={245} height={238} />
      </Block>
      <Block bottom margin={[hp(4), 0, 0]} center flex={1}>
        <Button
          onPress={() => navigate(RouteConstants.CONGRATS)}
          style={{width: wp(50)}}
          linear
          color="primary">
          Next
        </Button>
      </Block>
    </Block>
  );
};

export default PreviewPhoto;
