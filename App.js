import "react-native-gesture-handler";
import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/Route/MainStack";
//
const App = () => {
  return <NavigationContainer>
    <MainStack />
  </NavigationContainer>
};

export default App;
