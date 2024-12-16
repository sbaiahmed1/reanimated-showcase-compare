import React, { useRef } from 'react';
import {
    View,
    Animated,
    PanResponder,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const NUM_CARDS = 3;

const ComplexAnimatedExample = () => {
    const cards = Array.from({ length: NUM_CARDS }).map(() => {
        return {
            pan: useRef(new Animated.ValueXY()).current,
            scale: useRef(new Animated.Value(1)).current,
            rotate: useRef(new Animated.Value(0)).current,
            opacity: useRef(new Animated.Value(1)).current,
        };
    });

    const panResponders = cards.map((card, index) =>
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                Animated.parallel([
                    Animated.timing(card.scale, {
                        toValue: 1.2,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                    Animated.timing(card.opacity, {
                        toValue: 0.7,
                        duration: 200,
                        useNativeDriver: false,
                    }),
                ]).start();
            },
            onPanResponderMove: Animated.event(
                [null, { dx: card.pan.x, dy: card.pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                Animated.stagger(100, [
                    Animated.parallel([
                        Animated.spring(card.pan, {
                            toValue: { x: 0, y: 0 },
                            friction: 5,
                            useNativeDriver: false,
                        }),
                        Animated.timing(card.scale, {
                            toValue: 1,
                            duration: 200,
                            useNativeDriver: false,
                        }),
                        Animated.timing(card.opacity, {
                            toValue: 1,
                            duration: 200,
                            useNativeDriver: false,
                        }),
                        Animated.timing(card.rotate, {
                            toValue: card.rotate._value + 360,
                            duration: 500,
                            useNativeDriver: false,
                        }),
                    ]),
                ]).start();
            },
        })
    );

    return (
        <View style={styles.container}>
            {cards.map((card, index) => {
                const rotateInterpolate = card.rotate.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                });

                return (
                    <Animated.View
                        key={index}
                        {...panResponders[index].panHandlers}
                        style={[
                            styles.card,
                            {
                                transform: [
                                    { translateX: card.pan.x },
                                    { translateY: card.pan.y },
                                    { scale: card.scale },
                                    { rotate: rotateInterpolate },
                                ],
                                opacity: card.opacity,
                            },
                        ]}
                    >
                        <Text style={styles.text}>Card {index + 1}</Text>
                    </Animated.View>
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
