import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import CameraBox from '../components/CameraBox'
// import Canvas from 'react-native-canvas'

const Start = () => {

    const handleCanvas = (canvas: any) => {
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'purple'
        ctx.fillRect(0, 0, 100, 100)
    }

    return (
        <View style={styles.container}>
            {/*<Canvas ref={handleCanvas}/>*/}
            <CameraBox>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../img/bg.jpg')}
                />
            </CameraBox>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#78bdd0',
    },
    imgBox: {
        width: 200, height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowRadius: 10
    }
})

export default Start

