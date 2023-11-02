import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './components/MainScreen';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;