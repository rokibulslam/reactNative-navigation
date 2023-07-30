import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main'

const Drawer =createDrawerNavigator()
const DrawerNavigator = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Main' component={Main} options={{headerShown:true}}/>
        </Drawer.Navigator>
  )
}

export default DrawerNavigator