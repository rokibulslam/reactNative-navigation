import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Parent");
      }, 2000);
    }, []);
  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;
