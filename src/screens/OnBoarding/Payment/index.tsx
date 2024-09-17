import {ReactNode} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnBoardingStackParamList} from '../../../navigation/OnBoarding';

interface SelectGenderProps {}

function Payment({}: SelectGenderProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<OnBoardingStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Button title="Skip" onPress={() => navigation.navigate('Timer')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Payment;
