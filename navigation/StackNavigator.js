import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Onboarding, Signup, Home, Profile } from '../screens';
import DrawerNavigator from './DrawerStack';
import ProductScreen from '../screens/ProductScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProductSCreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
