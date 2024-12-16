import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming, LinearTransition,
} from 'react-native-reanimated';

const HeightInterpolation = () => {
    const [expanded, setExpanded] = useState(false);

    // Shared values for height, translation, and scaling
    const height = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);

    // Target height and translation distance
    const maxHeight = 200;
    const translationDistance = 50;

    const toggleExpand = () => {
        if (expanded) {
            // Collapse animations
            height.value = withTiming(0, { duration: 300 });
            translateY.value = withTiming(0, { duration: 300 });
            scale.value = withTiming(1, { duration: 300 });
        } else {
            // Expand animations
            height.value = withTiming(maxHeight, { duration: 300 });
            translateY.value = withTiming(translationDistance, { duration: 300 });
            scale.value = withTiming(1.1, { duration: 300 });
        }
        setExpanded(!expanded);
    };

    // Animated styles for the card
    const animatedCardStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
            transform: [
                { translateY: translateY.value },
                { scale: scale.value },
            ],
        };
    });

    return (
        <Animated.View layout={LinearTransition} style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={toggleExpand}>
                <Text style={styles.buttonText}>
                    {expanded ? 'Collapse' : 'Expand'}
                </Text>
            </TouchableOpacity>

            <Animated.View style={[styles.card, animatedCardStyle]}>
                <Text style={styles.cardContent}>
                    This is the content of the expandable card. It animates height, translation, and scaling.
                </Text>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        width: '100%',
        backgroundColor: '#61dafb',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    cardContent: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HeightInterpolation;
