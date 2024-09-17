import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import {Image} from 'expo-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomBannerWithActions} from '../../components/Intro/BottomBannerWithActions';

const {width, height} = Dimensions.get('window');

const Slide1: React.FC = () => {
  const lineX = useRef(new Animated.Value(width / 2)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newX = Math.max(0, Math.min(width, gestureState.moveX));
        lineX.setValue(newX);
      },
    }),
  ).current;

  const leftImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: lineX,
    height: height,
  };

  const rightImageStyle = {
    position: 'absolute',
    top: 0,
    left: lineX,
    width: Animated.add(Animated.multiply(-1, lineX), width),
    height: height,
    overflow: 'hidden',
  };
  const NAVIGATION_SCREEN = 'Slide2';
  const TEXT_BANNER = 'Effortless and Quick';

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={leftImageStyle}>
        <Image
          source={require('../../assets/manGlas.png')}
          style={styles.fullImage}
        />
      </Animated.View>

      <Animated.View style={rightImageStyle}>
        <Image
          source={require('../../assets/girl.png')}
          style={styles.fullImage}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.touchableLine,
          {left: Animated.subtract(lineX, styles.touchableLine.width / 2)},
        ]}
        {...panResponder.panHandlers}>
        <View style={styles.visibleLine} />
      </Animated.View>
      <BottomBannerWithActions text={TEXT_BANNER} slideTo={NAVIGATION_SCREEN} />
    </SafeAreaView>
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
  touchableLine: {
    position: 'absolute',
    width: 30,
    height: height,
    backgroundColor: 'transparent',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visibleLine: {
    width: 4,
    height: height,
    backgroundColor: '#BDFF00',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  greenBlur: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 255, 0, 0.3)', // Green color with opacity
    borderRadius: 50,
  },
  topLeftBlur: {
    top: 20,
    left: 20,
  },
  bottomRightBlur: {
    bottom: 20,
    right: 20,
  },
});

export default Slide1;
