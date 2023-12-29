import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';

export function Screen1() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="justify-center mt-1 text-3xl">
        Usuario Não autenticado
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}
