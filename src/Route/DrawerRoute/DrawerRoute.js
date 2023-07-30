import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../../screens/Drawer/Main';

const Drawer =createDrawerNavigator()
const DrawerRoute = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerRoute