import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import CameraPage from './pages/CameraPage';
import LocationPage from './pages/LocationPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Location" component={LocationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
