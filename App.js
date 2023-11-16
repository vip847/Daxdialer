import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './components/MainScreen';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={"transparent"} />
        <MainScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;