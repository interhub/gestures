import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import 'react-native-gesture-handler'
import NativeGesture from './examples/NativeGesture'
import ReanimateGesture from './examples/ReanimateGesture'
import SharedNav from './examples/SharedNav'
import PanRotate from './examples/PanRotate'
import TfCamera from './examples/TfCamera'
import {SCREEN_NAME} from './src/SCREEN_NAME'
import Menu from './src/Menu'

const Stack = createStackNavigator()

const App = () => {
    return <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name={SCREEN_NAME.MENU} component={Menu}/>
            <Stack.Screen name={SCREEN_NAME.NATIVE_GESTURE} component={NativeGesture}/>
            <Stack.Screen name={SCREEN_NAME.REANIMATE_GESTURE} component={ReanimateGesture}/>
            <Stack.Screen name={SCREEN_NAME.SHARED_NAV} component={SharedNav}/>
            <Stack.Screen name={SCREEN_NAME.PAN_ROTATE} component={PanRotate}/>
            <Stack.Screen name={SCREEN_NAME.TF_CAMERA} component={TfCamera}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default App

