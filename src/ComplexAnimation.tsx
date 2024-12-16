import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withSpring,
    withTiming,
    withSequence,
    withDelay,
    withRepeat,
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const NUM_CARDS = 3;

const ComplexAnimatedExample = () => {
    const cards = Array.from({ length: NUM_CARDS }).map(() => ({
        translateX: useSharedValue(0),
        translateY: useSharedValue(0),
        scale: useSharedValue(1),
        rotate: useSharedValue(0),
        opacity: useSharedValue(1),
    }));

    const panGestureHandlers = cards.map((card, index) =>
        useAnimatedGestureHandler({
            onStart: () => {
                card.scale.value = withTiming(1.2, { duration: 200 });
                card.opacity.value = withTiming(0.7, { duration: 200 });
            },
            onActive: (event) => {
                card.translateX.value = event.translationX;
                card.translateY.value = event.translationY;
            },
            onEnd: () => {
                card.scale.value = withTiming(1, { duration: 200 });
                card.opacity.value = withTiming(1, { duration: 200 });

                // Staggered reset and rotation animation
                card.translateX.value = withDelay(
                    index * 100,
                    withSpring(0, { damping: 10 })
                );
                card.translateY.value = withDelay(
                    index * 100,
                    withSpring(0, { damping: 10 })
                );
                card.rotate.value = withSequence(
                    withTiming(360, { duration: 500 }),
                    withTiming(0, { duration: 0 })
                );
            },
        })
    );

    return (
        <View style={styles.container}>
            {cards.map((card, index) => {
                const animatedStyle = useAnimatedStyle(() => {
                    return {
                        transform: [
                            { translateX: card.translateX.value },
                            { translateY: card.translateY.value },
                            { scale: card.scale.value },
                            { rotate: `${card.rotate.value}deg` },
                        ],
                        opacity: card.opacity.value,
                    };
                });

                return (
                    <GestureHandlerRootView style={{flex: 1}}>
                    <PanGestureHandler key={index} onGestureEvent={panGestureHandlers[index]}>
                        <Animated.View style={[styles.card, animatedStyle]}>
                            <Text style={styles.text}>Card {index + 1}</Text>
                        </Animated.View>
                    </PanGestureHandler>
                </GestureHandlerRootView>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    card: {
        width: width * 0.6,
        height: 150,
        backgroundColor: '#61dafb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ComplexAnimatedExample;
