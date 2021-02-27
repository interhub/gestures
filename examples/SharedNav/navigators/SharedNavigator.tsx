import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import {SCREEN_NAME_SHARED} from '../constants/SCREEN_NAME_SHARED'
import Start from '../screen/Start'
import React from 'react'
import ItemDetail from '../screen/ItemDetail'

const Stack = createSharedElementStackNavigator()

const App = () => {
    return <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={SCREEN_NAME_SHARED.START_LIST} component={Start}/>
        <Stack.Screen name={SCREEN_NAME_SHARED.ITEM_DETAIL} component={ItemDetail}/>
    </Stack.Navigator>
}

export default App
