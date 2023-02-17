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
import {EditSvg, NotificationSvg} from '../assets/svgs/HeaderSvgs';
import RatingsItems from './RatingsItems';

const ProfileHeader = ({
  EditIcon,
  avatarId,
  avatarName,
  navigation,
  rating,
  BGImage,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={BGImage}
            resizeMode="cover"
            style={styles.image}>
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <Header navigation={navigation} />
            </View>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
              marginTop: -40,
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
                      paddingHorizontal: 10,
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
                        fontSize: 14,
                        marginTop: 10,
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
                      marginTop: 45,
                    }}>
                    <EditSvg />
                  </TouchableRipple>
                )}
                {rating && (
                  <View
                    style={{
                      paddingHorizontal: 10,
                      marginTop: 50,
                    }}>
                    <RatingsItems />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: 224,
    backgroundColor: '#FFFF00',
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