import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Tabs from '@/components/Tabs'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tabs/>
    </NavigationContainer>
  )
}


export default App