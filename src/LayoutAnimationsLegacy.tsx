import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LayoutAnimationsLegacy = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedExitValue = useRef(new Animated.Value(1)).current;

  const handleAnimation = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.linear, // or any other easing property
    }).start();
  };

  const handleExitAnimation = () => {
    Animated.timing(animatedExitValue, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.linear, // or any other easing property
    }).start();
  };

  useEffect(() => {
    handleAnimation();
    setTimeout(() => {
      handleExitAnimation();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title} onPress={handleAnimation}>
          Fade
        </Text>
        <View style={styles.rowCenter}>
          <Animated.View
            style={{
              height: 150,
              width: 150,
              backgroundColor: 'red',
              transform: [{scale: animatedValue}],
            }}
          />
          <Animated.View
              style={{
                  height: 150,
                  width: 150,
                  backgroundColor: 'red',
                  transform: [{scale: animatedExitValue}],
              }}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default LayoutAnimationsLegacy;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  rowCenter: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 10,
  },
});
