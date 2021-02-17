
import React, { useRef } from 'react';
import { Animated, PanResponder, useWindowDimensions, } from 'react-native';
import clamp from 'clamp'

interface GesturBoxProps {
    children: React.ReactNode
}

const GesturBox = ({ children }: GesturBoxProps) => {

    const useNativeDriver = false


    const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

    const panGesture = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
            pan.setValue({ x: 0, y: 0 })
        },
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x, dy: pan.y }
            ],
            { useNativeDriver }
        ),
        onPanResponderRelease: (e, { vx, vy }) => {
            // console.log('REALESE', e)
            pan.flattenOffset();
            let velocity: any
            if (vx >= 0) {
                velocity = clamp(vx, 0.1, 2);
            } else if (vx < 0) {
                velocity = clamp(vx, 0.1, 0.5) * -1;
            }

            Animated.decay(pan, { velocity: { x: velocity, y: vy }, deceleration: 0.997, useNativeDriver }).start(() => {
                // pan.setOffset({ x: 0, y: 0 })
                console.log('END ANIM PAN')
            })
        },
    })).current

    const { height, width } = useWindowDimensions()

    const translateY = pan.y.interpolate({ inputRange: [0, height], outputRange: [0, height * 2], extrapolate: 'clamp' })
    const rotateX = pan.y.interpolate({ inputRange: [0, height], outputRange: ['0deg', '360deg'], extrapolate: 'clamp' })

    return (
        <Animated.View {...panGesture.panHandlers} style={{ flex: 1, backgroundColor: 'lightblue' }} >
            <Animated.View style={{ transform: [{ translateY }, { rotateX }], }} >
                {children}
            </Animated.View>
        </Animated.View>
    );
}

console.log(clamp(0, 0.1, 2))

export default GesturBox

