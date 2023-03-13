import React from 'react';
import Lottie from 'lottie-react-native';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {Colors} from '../assets/constants/Colors';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import Assets from '../assets';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Fonts} from '../assets/constants/Fonts';
import {BackSvg, EditSvg, NotificationSvg} from '../assets/svgs/HeaderSvgs';
import RatingsItems from './RatingsItems';

const ProfileHeader = ({
  EditIcon,
  avatarId,
  avatarName,
  navigation,
  rating,
  header1,
  header2,
  BGImage,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 375, height: 200, aspectRatio: 2}}>
        <ImageBackground
          source={BGImage}
          resizeMode="cover"
          style={styles.image}>
          <View style={{padding: 25}}>
            {header1 && <Header navigation={navigation} />}
            {header2 && <HeaderComponent onPress={onPress} />}
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          marginTop: -18,
        }}>
        <View style={{}}>
          <View
            style={{
              overflow: 'visible',
              // marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: 200,
                marginBottom: 2,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                //   onPress={() => props.navigation.navigate('Profile')}
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
              <View
                style={{
                  paddingHorizontal: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 45,
                  //   width: 100,
                  marginBottom: 25,
                  //   flexDirection: 'row',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: Fonts.default,
                    fontWeight: '600',
                    fontSize: 18,
                    color: Colors.tertiary,
                  }}>
                  {avatarName}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: Fonts.default,
                    fontWeight: '600',
                    fontSize: 16,
                    color: Colors.tertiary,
                    opacity: 0.43,
                  }}>
                  {avatarId}
                </Text>
              </View>
            </View>
            {EditIcon && (
              <TouchableRipple
                style={{
                  paddingHorizontal: 10,
                  // marginTop: 45,
                  position: 'absolute',
                  right: 0,
                  top: 55,
                }}>
                <EditSvg />
              </TouchableRipple>
            )}
            {rating && (
              <View
                style={{
                  paddingLeft: 15,
                  // marginTop: 50,
                  position: 'absolute',
                  marginTop: 55,
                  right: 0,
                }}>
                <RatingsItems />
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
const HeaderComponent = ({navigation, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableRipple onPress={onPress} style={styles.btn}>
        <BackSvg />
      </TouchableRipple>
    </View>
  );
};

export default ProfileHeader;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.secondary,
  },
  text: {
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  image: {
    width: '100%',
    height: 'auto',
    height: 224,
    // backgroundColor: '#FFFF00',
    overflow: 'visible',
  },
  texline: {
    width: '100%',
    paddingLeft: 5,
    marginBottom: 2,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
const data = [
  {
    id: 1,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/dumbbell.png'),
  },
  {
    id: 2,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/running.png'),
  },
  {
    id: 3,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/Imap-food.png'),
  },
];
