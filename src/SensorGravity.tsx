import Animated, {
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';

export default function SensorGravity() {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(gravity.sensor.value.x * 20)},
        {translateY: withSpring(gravity.sensor.value.y * 20)},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <ImageBackground
            style={{flex:1}}
          imageStyle={{height: '100%', width: '100%'}}
          source={{uri: 'https://mfiles.alphacoders.com/186/186992.jpg'}}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
      height: Dimensions.get('screen').height*2,width: Dimensions.get('screen').width* 2,
  },
});
