import React from 'react'
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'
import {StyleSheet} from 'react-native'

const CameraBox = ({children}: { children: React.ReactNode }) => {
    const y = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { startY: number }>({
        onStart: (_, ctx) => {
            ctx.startY = y.value
        },
        onActive: (event, ctx) => {
            y.value = ctx.startY + event.translationY
        },
        onEnd: (_) => {
            y.value = withSpring(0)
        },
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: y.value,
                },
            ],
        }
    })

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[{height: 300, width: 300, backgroundColor: 'green'}, animatedStyle]}>
                {children}
            </Animated.View>
        </PanGestureHandler>
    )
}


export default CameraBox
