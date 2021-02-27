import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const ItemDetail = () => {
    return (
        <View style={styles.container}>
            <Text>ItemDetail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ItemDetail
