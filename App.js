import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStack from './navigation/RootStack';
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootStack />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
