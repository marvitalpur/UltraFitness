import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Courses, Home, Profile, Shope} from '../screens';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Fonts} from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import {WIDTH} from '../assets/constants/Dimensions';
import MyOrders from '../screens/MyOrder';
import CartScreen from '../screens/CartScreen';
import AddcardScreen from '../screens/AddcardScreen';
import Settings from '../screens/settings';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        drawerStyle: {width: '100%'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shop" component={Shope} />
      <Drawer.Screen name="Courses" component={Courses} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Orders" component={MyOrders} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Payment Settings" component={AddcardScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      {/* <Drawer.Screen name="InstructorDetails" component={InstructorDetails} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const CustomDrawerContent = props => {
  const [activeButton, setActiveButton] = useState(0);
  const [checked, setChecked] = useState('first');
  return (
    <ImageBackground
      source={Assets.backgroundImages.menuBackground}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={{paddingHorizontal: 15}}>
          <Header navigation={props.navigation} backIcon={true} />
        </View>
        <View style={{paddingHorizontal: 30, marginTop: 25}}>
          <View style={{width: 100, marginBottom: 25}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                borderColor: Colors.primary,
                borderRadius: 100,
              }}>
              <Avatar.Image
                size={90}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={Assets.logos.avatarPlaceholder}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 16,
                color: Colors.tertiary,
                marginTop: 10,
              }}>
              Alen Matias
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 12,
                color: Colors.tertiary,
                marginTop: 5,
                opacity: 0.43,
              }}>
              @Alenmatias
            </Text>
          </View>
          {/* <SidebarButton /> */}
        </View>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            // backgroundColor: 'red',
            paddingLeft: 25,
          }}
          ItemSeparatorComponent={<View style={{marginVertical: -15}} />}
          data={sidebarData}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <SidebarButton
              item={item}
              index={index}
              setActiveButton={setActiveButton}
              activeButton={activeButton}
              navigation={props.navigation}
            />
          )}
        />
        <View style={{paddingLeft: 25, paddingBottom: 10}}>
          <ButtonComponent
            borderRadius={50}
            icon="logout"
            buttonText="Logout"
            buttonColor={Colors.secondary}
            textColor={Colors.tertiary}
            onPress={() => navigation.navigate('Drawer')}
            height={WIDTH <= 375 ? 40 : 55}
            width={WIDTH <= 375 ? 125 : 175}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const SidebarButton = ({
  activeButton,
  setActiveButton,
  item,
  index,
  navigation,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0}
      onPress={() => {
        setActiveButton(index);
        navigation.navigate(item.screen);
      }}
      style={{
        width: 160,
        height: 75,
        borderRadius: 50,
        justifyContent: 'center',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        // elevation: 12,
      }}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          backgroundColor:
            activeButton === index ? Colors.secondary : 'transparent',
          width: 85,
          height: 75,
          borderRadius: 75,
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: -180,
          backgroundColor:
            activeButton === index ? Colors.secondary : 'transparent',
          width: 300,
          height: 45,
          borderRadius: 15,

          transform: [{rotate: '6deg'}],
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: -180,
          backgroundColor:
            activeButton === index ? Colors.secondary : 'transparent',
          width: 300,
          height: 45,
          borderRadius: 15,
          transform: [{rotate: '-6deg'}],
        }}
      />
      <Text
        style={{
          // textAlign: 'center',
          fontFamily: Fonts.default,
          fontWeight: '600',
          fontSize: 16,
          color: Colors.tertiary,
          letterSpacing: 0.9,
          // marginTop: 10,
        }}>
        {item.screen}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.secondary,
  },
  image: {flex: 1},
});

const sidebarData = [
  {
    id: 1,
    screen: 'Home',
  },
  {
    id: 2,
    screen: 'Shop',
  },
  {
    id: 3,
    screen: 'My Orders',
  },
  {
    id: 4,
    screen: 'Profile',
  },

  {
    id: 5,
    screen: 'Cart',
  },
  {id: 6, screen: 'Payment Settings'},
  {
    id: 7,
    screen: 'Settings',
  },
];
