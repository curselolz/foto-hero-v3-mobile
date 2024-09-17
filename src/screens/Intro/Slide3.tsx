import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Image} from 'expo-image';
import {BottomBannerWithActions} from '../../components/Intro/BottomBannerWithActions';

const {width, height} = Dimensions.get('window');

interface Slide3Props {
  // Define the props for Slide3 component here
}

const Slide3: React.FC<Slide3Props> = () => {
  const NAVIGATION_SCREEN = 'SignInStack';
  const TEXT_BANNER = 'Continuously Updated AI Model';
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/manGlas.png')}
        style={styles.fullImage}
      />
      <Text>Slide 3</Text>
      <BottomBannerWithActions text={TEXT_BANNER} slideTo={NAVIGATION_SCREEN} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  fullImage: {
    width: width,
    height: height,
  },
});

export default Slide3;
