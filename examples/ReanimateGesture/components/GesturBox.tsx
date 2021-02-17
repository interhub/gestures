
import clamp from 'clamp';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { GestureHandlerGestureEvent, GestureHandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';

interface GesturBoxProps {
    children: React.ReactNode
}

const GesturBox = ({ children }: GesturBoxProps) => {

    const { height, width } = useWindowDimensions()

    const contentSize = 1500

    const translate = useSharedValue(0)

    const clamp: [number, number] = [-height, height]
    const isInClamp = (val: number) => {
        "worklet";
        return val > clamp[0] && val < clamp[1]
    }

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { ctx: number }>({
        onStart: ({ translationY }, env) => { console.log('START'); env.ctx = translate.value },
        onActive: ({ translationY }, { ctx = 0 }) => {
            console.log('ACTIVE');
            console.log(isInClamp(translationY + ctx), 'isInClamp(translationY + ctx)')
            if (!isInClamp(translationY + ctx)) return;
            translate.value = translationY + ctx;
        },
        onEnd: ({ velocityY }) => { translate.value = withDecay({ velocity: velocityY, clamp }) },
        onCancel: () => {
            console.log('CANCELEd')
        },
        onFail: () => { console.log('FAIL TOUCH') }
    })

    const boxStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translate.value * 3 }]
    }))

    return (
        <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <PanGestureHandler onGestureEvent={onGestureEvent}  >
                <Animated.View
                    onTouchStart={() => {
                        translate.value = withDecay({ velocity: 0 })
                    }}
                    style={[boxStyle]} >
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
}

console.log(clamp(0, 0.1, 2))

export default GesturBox

