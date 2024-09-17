import {ReactNode} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/NavigationContainer';

interface SelectGenderProps {}

function ChoosePlan({}: SelectGenderProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const NAVIGATION_SCREEN = 'Tabs';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <Button
        title="Skip"
        onPress={() => navigation.navigate(NAVIGATION_SCREEN)}
      />
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

export default ChoosePlan;
