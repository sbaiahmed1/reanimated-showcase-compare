/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import LayoutAnimations from './src/LayoutAnimations.tsx';
import LayoutAnimationsLegacy from "./src/LayoutAnimationsLegacy.tsx";
import ComplexAnimationLegacy from "./src/ComplexAnimationLegacy.tsx";
import ComplexAnimation from "./src/ComplexAnimation.tsx";
import LegacyHeightInerpolation from "./src/LegacyHeightInerpolation.tsx";
import HeightInterpolation from "./src/HeightInerpolation.tsx";
import SensorGravity from "./src/SensorGravity.tsx";
import ListLayout from "./src/ListLayout.tsx";

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LayoutAnimation" component={LayoutAnimations} />
          <Stack.Screen name="LayoutAnimationLegacy" component={LayoutAnimationsLegacy} />
          <Stack.Screen name="ComplexAnimationLegacy" component={ComplexAnimationLegacy} />
          <Stack.Screen name="ComplexAnimation" component={ComplexAnimation} />
          <Stack.Screen name="LegacyHeightInterpolation" component={LegacyHeightInerpolation} />
          <Stack.Screen name="HeightInterpolation" component={HeightInterpolation} />
          <Stack.Screen name="SensorGravity" component={SensorGravity} />
          <Stack.Screen name="ListLayout" component={ListLayout} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
