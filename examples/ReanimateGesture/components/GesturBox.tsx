
import clamp from 'clamp';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface GesturBoxProps {
    children: React.ReactNode
}

const GesturBox = ({ children }: GesturBoxProps) => {

    const { height, width } = useWindowDimensions()

    const contentSize = 1500

    const translate = useSharedValue(0)

    const onGestureEvent = useAnimatedGestureHandler({

    })

    const boxStyle = useAnimatedStyle(() => ({
        opacity: 0.8
    }))

    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}  >
                <Animated.View style={[boxStyle]} >
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

console.log(clamp(0, 0.1, 2))

export default GesturBox

