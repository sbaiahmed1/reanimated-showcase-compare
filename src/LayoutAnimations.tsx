import {StyleSheet, Text, View} from 'react-native';
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
    SlideInDown,
    SlideInLeft,
    SlideInRight,
    SlideInUp,
    SlideOutLeft,
    SlideOutRight,
    RotateInDownRight,
    RotateInUpRight,
    RotateOutDownLeft,
    BounceIn,
    BounceOut, FlipInEasyX, FlipOutEasyX,
} from 'react-native-reanimated';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LayoutAnimations = () => {
  const [toggleRotate, setToggleRotate] = React.useState(false);
  const [toggleSlide, setToggleSlide] = React.useState(false);
  const [toggleFlip, setToggleFlip] = React.useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        layout={LinearTransition}
        style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Fade</Text>
        <View style={styles.rowCenter}>
          <Animated.View
            entering={FadeIn.delay(500).duration(500)}
            style={{height: 100, width: 100, backgroundColor: 'red'}}
          />
          <Animated.View
            entering={FadeOut.delay(500).duration(500)}
            style={{height: 100, width: 100, backgroundColor: 'red'}}
          />
        </View>
        <Text
          onPress={() => {
            setToggleRotate(!toggleRotate);
          }}
          style={styles.title}>
          Rotate
        </Text>
        {toggleRotate && (
          <Animated.View layout={LinearTransition} style={styles.rowCenter}>
            <Animated.View
              entering={RotateInDownRight.duration(500)}
              style={{height: 100, width: 100, backgroundColor: 'green'}}
            />
            <Animated.View
              entering={RotateOutDownLeft.duration(500).delay(500)}
              style={{height: 100, width: 100, backgroundColor: 'green'}}
            />
          </Animated.View>
        )}

        <Text
          onPress={() => {
            setToggleSlide(!toggleSlide);
          }}
          style={styles.title}>
          Rotate
        </Text>
        {toggleSlide && (
          <Animated.View layout={LinearTransition} style={styles.rowCenter}>
            <Animated.View
              entering={BounceIn.duration(500)}
              style={{height: 100, width: 100, backgroundColor: 'blue'}}
            />
            <Animated.View
              entering={BounceOut.duration(500).delay(500)}
              style={{height: 100, width: 100, backgroundColor: 'blue'}}
            />
          </Animated.View>
        )}

        <Text
          onPress={() => {
            setToggleFlip(!toggleFlip);
          }}
          style={styles.title}>
          FlipEasy
        </Text>
        {toggleFlip && (
          <Animated.View layout={LinearTransition} style={styles.rowCenter}>
            <Animated.View
              entering={FlipInEasyX.duration(500)}
              style={{height: 100, width: 100, backgroundColor: 'black'}}
            />
            <Animated.View
              entering={FlipOutEasyX.duration(500).delay(500)}
              style={{height: 100, width: 100, backgroundColor: 'black'}}
            />
          </Animated.View>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

export default LayoutAnimations;

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
