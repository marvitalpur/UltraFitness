import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Onboarding, Signup, Home, Profile, Shope } from '../screens';
import DrawerNavigator from './DrawerStack';
import ProductScreen from '../screens/ProductScreen';
import SearchScreen from '../screens/SearchScreen';
import InstructorDetails from '../screens/InstructorDetails';
import BookingDetail from '../screens/BookingDetail';
import QRScreen from '../screens/QRScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CartScreen from '../screens/CartScreen';
import GoogleMapsScreen from '../screens/GoogleMapsScreen';
import CheckoutCart from '../screens/CheckoutCart';
import CheckoutOrder from '../screens/CheckoutOrder';
import MyOrders from '../screens/MyOrder';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import OrderTracker from '../screens/TrackOrder';
import SportsScreen from '../screens/sportsScreen';
import AddcardScreen from '../screens/AddcardScreen';
import ExcersizeDetail from '../screens/excersizeDetail';
import VideoScreen from '../screens/VideoScreen';

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
      <Stack.Screen name="InstructorDetails" component={InstructorDetails} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="QRCode" component={QRScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="GoogleMapsScreen" component={GoogleMapsScreen} />
      <Stack.Screen name="CheckoutCart" component={CheckoutCart} />
      <Stack.Screen name="CheckoutOrder" component={CheckoutOrder} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="OrderTracker" component={OrderTracker} />
      <Stack.Screen name="SportsScreen" component={SportsScreen} />
      <Stack.Screen name="AddcardScreen" component={AddcardScreen} />
      <Stack.Screen name="ExcersizeDetail" component={ExcersizeDetail} />
      <Stack.Screen name='VideoScreen' component={VideoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
