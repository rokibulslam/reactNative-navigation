import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './src/screens/Stack/Splash'
import Parent from './src/screens/Stack/Parent'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './src/screens/Drawer/Main'


// Drawer Navigator
const Drawer=createDrawerNavigator()
function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Main' component={Main} />
    </Drawer.Navigator>
  )
}
// Bottom Navigator
// Stack Navigator
const Stack = createNativeStackNavigator()
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Parent"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
}

export default Navigation