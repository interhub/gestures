import clamp from 'clamp'
import React from 'react'
import {useWindowDimensions, View} from 'react-native'
import {
    GestureHandlerGestureEvent,
    GestureHandlerStateChangeEvent,
    PanGestureHandler,
    PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler, useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withDecay
} from 'react-native-reanimated'

interface GesturBoxProps {
    children: React.ReactNode
}

const AnimatedScrollView = Animated.ScrollView

const GesturBox = ({children}: GesturBoxProps) => {

    const {height, width} = useWindowDimensions()

    const scrollY = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y
    })

    const boxStyle = useAnimatedStyle(() => ({
        transform: [{translateY: scrollY.value}]
    }))

    return (
        <View style={{flex: 1, backgroundColor: 'lightblue'}}>
            <AnimatedScrollView onScroll={scrollHandler}>
                <Animated.View style={boxStyle}>
                    {children}
                </Animated.View>
            </AnimatedScrollView>
        </View>
    )
}

console.log(clamp(0, 0.1, 2))

export default GesturBox

