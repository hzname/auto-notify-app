import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AppLoginScreen from './src/screens/AppLoginScreen';
import AppVehicleListScreen from './src/screens/AppVehicleListScreen';
import AppAddVehicleScreen from './src/screens/AppAddVehicleScreen';
import AppCreateMessageScreen from './src/screens/AppCreateMessageScreen';
import AppMessageDetailScreen from './src/screens/AppMessageDetailScreen';
import AppSettingsScreen from './src/screens/AppSettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={AppLoginScreen} />
        <Stack.Screen name="vehicle-list" component={AppVehicleListScreen} />
        <Stack.Screen name="add-vehicle" component={AppAddVehicleScreen} />
        <Stack.Screen name="create-message" component={AppCreateMessageScreen} />
        <Stack.Screen name="message-detail" component={AppMessageDetailScreen} />
        <Stack.Screen name="settings" component={AppSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
