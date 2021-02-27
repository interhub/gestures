import {
    createSharedElementStackNavigator,
    SharedElementConfig,
    SharedElementRoute, SharedElementsComponentConfig
} from 'react-navigation-shared-element'
import {SCREEN_NAME_SHARED} from '../constants/SCREEN_NAME_SHARED'
import Start from '../screen/Start'
import React from 'react'
import ItemDetail from '../screen/ItemDetail'


const sharedElementsConfig:
    SharedElementsComponentConfig<SharedElementRoute<SCREEN_NAME_SHARED.START_LIST, {}>, SharedElementRoute<SCREEN_NAME_SHARED.ITEM_DETAIL, {}>> =
    (route, otherRoute, showing) => {
        console.log('FOCUS !!', showing)
        return [
            {id: 'image'},
            {id: 'text'},
        ]
    }


const Stack = createSharedElementStackNavigator()

const App = () => {
    return <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={SCREEN_NAME_SHARED.START_LIST} component={Start}/>
        <Stack.Screen sharedElementsConfig={sharedElementsConfig} name={SCREEN_NAME_SHARED.ITEM_DETAIL}
                      component={ItemDetail}/>
    </Stack.Navigator>
}

export default App
