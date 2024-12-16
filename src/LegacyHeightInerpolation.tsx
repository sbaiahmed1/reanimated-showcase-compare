import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet,
} from 'react-native';

const AnimatedHeightExample = () => {
    const [expanded, setExpanded] = useState(false);

    // Animated values for height, translation, and scaling
    const heightAnim = useRef(new Animated.Value(0)).current;
    const translateYAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Target height for expansion
    const maxHeight = 200;
    const translationDistance = 50;

    const toggleExpand = () => {
        if (expanded) {
            // Collapse animations
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(translateYAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            // Expand animations
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: maxHeight,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(translateYAnim, {
                    toValue: translationDistance,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1.1,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        }
        setExpanded(!expanded);
    };

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleExpand}>
    <Text style={styles.buttonText}>
        {expanded ? 'Collapse' : 'Expand'}
        </Text>
        </TouchableOpacity>

        <Animated.View
    style={[
            styles.card,
    {
        height: heightAnim,
            transform: [
        { translateY: translateYAnim },
        { scale: scaleAnim },
    ],
    },
]}
>
    <Text style={styles.cardContent}>
        This is the content of the expandable card. It animates height, translation, and scaling.
    </Text>
    </Animated.View>
    </View>
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

export default AnimatedHeightExample;
