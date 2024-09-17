import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {Image} from 'expo-image';
import {BottomBannerWithActions} from '../../components/Intro/BottomBannerWithActions';

interface Slide2Props {
  // Define the props for Slide2 component here
}

const Slide2: React.FC<Slide2Props> = () => {
  const NAVIGATION_SCREEN = 'Slide3';
  const TEXT_BANNER = 'Continuously Updated AI Model';
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/girl.png')}
        style={styles.fullImage}
      />
      <Text>Slide 2</Text>
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

export default Slide2;
