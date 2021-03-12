import React from 'react'
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import {cameraWithTensors} from '@tensorflow/tfjs-react-native'
import {Camera} from 'expo-camera'
import handpose from '@tensorflow-models/handpose'
import tf from '@tensorflow/tfjs'

const TensorCamera = cameraWithTensors(Camera)

const Start = () => {
    const {width, height} = useWindowDimensions()
    const startHandPose = async (images: any, updatePreview: any, gl: any) => {
        await tf.ready()
        console.log(images, updatePreview, gl, 'ALL DEPS')
        const nextImageTensor = images.next().value
        const model = await handpose.load()

        const getNet = async () => await model.estimateHands(nextImageTensor, {flipHorizontal: false})
        const animate = (async () => {
            const net = await getNet()
            console.log(net, 'NET')
            // if (net.length) {
            // for (let i = 0; i < net.length; i++) {
            //     const keypoints = net[i].landmarks
            //     for (let i = 0; i < keypoints.length; i++) {
            //         const [x, y, z] = keypoints[i]
            //         if (i % 4 === 0 && i) {
            //             console.log(x, y)
            //         }
            //     }
            // }

            // }
            requestAnimationFrame(animate)
        })
        animate()


        console.log('nextImageTensor:', nextImageTensor)

        if (nextImageTensor) {
            console.log('yes go')
            const predictions = await model.estimateHands(nextImageTensor)
            console.log('predictions:', predictions)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Hello cam!</Text>
            <TensorCamera
                style={styles.camera}
                type={Camera.Constants.Type.front}
                cameraTextureHeight={height / 2}
                cameraTextureWidth={width / 2}
                resizeHeight={200}
                resizeWidth={152}
                resizeDepth={3}
                onReady={startHandPose}
                autorender={true}
            />
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
        width: '100%',
        height: '100%'
    }
})

export default Start

