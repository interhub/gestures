import React from 'react'
import {Button, StyleSheet, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SCREEN_NAME_SHARED} from '../constants/SCREEN_NAME_SHARED'

const Start = () => {
    const {navigate} = useNavigation()
    const goToDetail = () => {
        navigate(SCREEN_NAME_SHARED.ITEM_DETAIL)
    }

    return (
        <View style={styles.container}>
            <Button title={'goToDetail'} onPress={goToDetail}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default Start

