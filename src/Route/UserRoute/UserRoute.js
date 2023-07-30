import { View, Text } from 'react-native'
import React from 'react'
import Splash from '../../screens/Stack/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const UserRoute = () => {
  return (    
      <Stack.Navigator options={{headerShown:true}}>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="User"
          component={UserRoute}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
}

export default UserRoute