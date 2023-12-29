import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export function Screen2() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text>User</Text>
      <StatusBar style="light" />
    </View>
  );
}
