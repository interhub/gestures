import React from 'react'
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import {cameraWithTensors} from '@tensorflow/tfjs-react-native'
import {Camera} from 'expo-camera'
import handpose from '@tensorflow-models/handpose'

const TensorCamera = cameraWithTensors(Camera)

const Start = () => {
    const {width, height} = useWindowDimensions()
    // const startHandPose = async () => {
    //     const model = await handpose.load()
    //     const getNet = async () => await model.estimateHands(video, {flipHorizontal: false})
    //     const animate = (async () => {
    //         const net = await getNet()
    //         if (net.length) {
    //             for (let i = 0; i < net.length; i++) {
    //                 const keypoints = net[i].landmarks
    //                 for (let i = 0; i < keypoints.length; i++) {
    //                     const [x, y, z] = keypoints[i]
    //                     if (i % 4 === 0 && i) {
    //                         console.log(x, y)
    //                     }
    //                 }
    //             }
    //
    //         }
    //         requestAnimationFrame(animate)
    //     })
    //     animate()
    // }

    return (
        <View style={styles.container}>
            <Text>Hello cam!</Text>
            {/*<TensorCamera*/}
            {/*    style={styles.camera}*/}
            {/*    type={Camera.Constants.Type.front}*/}
            {/*    cameraTextureHeight={height / 2}*/}
            {/*    cameraTextureWidth={width / 2}*/}
            {/*    resizeHeight={200}*/}
            {/*    resizeWidth={152}*/}
            {/*    resizeDepth={3}*/}
            {/*    onReady={handleCameraStream}*/}
            {/*    autorender={true}*/}
            {/*/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#78bdd0',
        paddingTop: 50
    },
    camera: {
        flex: 1
    }
})

export default Start

