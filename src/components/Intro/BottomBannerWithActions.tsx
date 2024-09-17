import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'expo-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IntroStackParamList} from '../../navigation/Intro/Intro.typing';

interface BottomTabProps {
  text: string;
  slideTo: string;
}

export const BottomBannerWithActions: React.FC<BottomTabProps> = ({
  text,
  slideTo,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<IntroStackParamList>>();
  return (
    <>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          <Text>{text}</Text>
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/logo.png')} />
        <Text>.....</Text>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate(slideTo)}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skipButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
