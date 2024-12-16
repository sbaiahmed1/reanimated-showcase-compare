import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import layoutAnimationsLegacy from './LayoutAnimationsLegacy.tsx';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const navigateToLayoutAnimations = () => {
    navigation.navigate('LayoutAnimation');
  };

  const navigateToLayoutAnimationsLegacy = () => {
    navigation.navigate('LayoutAnimationLegacy');
  };

  const navigateToComplexAnimationsLegacy = () => {
    navigation.navigate('ComplexAnimationLegacy');
  };

  const navigateToComplexAnimation = () => {
    navigation.navigate('ComplexAnimation');
  };

  const navigateToLegacyHeightInterpolation = () => {
    navigation.navigate('LegacyHeightInterpolation');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Reanimated ShowCase APP</Text>
        <Button
          title={'Layout Animation'}
          onPress={navigateToLayoutAnimations}
        />

        <Button
          title={'Layout Animation Legacy ANIMATED'}
          onPress={navigateToLayoutAnimationsLegacy}
        />

        <Button
          title={'Complex Animation Legacy ANIMATED'}
          onPress={navigateToComplexAnimationsLegacy}
        />

        <Button
          title={'Complex Animation REANIMATED'}
          onPress={navigateToComplexAnimation}
        />

        <Button
          title={'Complex Legacy Height Animated'}
          onPress={navigateToLegacyHeightInterpolation}
        />

        <Button
          title={'Complex Height ReAnimated'}
          onPress={() => {
            navigation.navigate('HeightInterpolation');
          }}
        />

        <Button
          title={'Gravity Sensor ReAnimated'}
          onPress={() => {
            navigation.navigate('SensorGravity');
          }}
        />

        <Button
          title={'List Layout ReAnimated'}
          onPress={() => {
            navigation.navigate('ListLayout');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: 100
  },
});
