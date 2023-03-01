import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Onboarding, Signup, Home, Profile, Shope} from '../screens';
import DrawerNavigator from './DrawerStack';
import ProductScreen from '../screens/ProductScreen';
import SearchScreen from '../screens/SearchScreen';

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
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Shope" component={Shope} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
