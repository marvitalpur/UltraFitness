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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {Colors} from '../assets/constants/Colors';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import Assets from '../assets';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Fonts} from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import {EditSvg, NotificationSvg} from '../assets/svgs/HeaderSvgs';
import CourseCard from '../components/CourseCard';
import Products from '../components/Products';
import ProductCardmd from '../components/ProductCardmd';
import ProductCardSm from '../components/ProductCardSm';
import ProductCardlg from '../components/ProductCardlg';
import WorkOutCard from '../components/WorkOutCard';
const Profile = ({navigation}) => {
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
    {
      id: 4,
      WorkoutName: 'Running',
      WorkoutTime: '12 km',
      WorkoutImage: require('../assets/images/dumbbell.png'),
    },
    {
      id: 6,
      WorkoutName: 'Food',
      WorkoutTime: '1320 Kcal',
      WorkoutImage: require('../assets/images/running.png'),
    },
    {
      id: 7,
      WorkoutName: 'Workout',
      WorkoutTime: '02 Hours',
      WorkoutImage: require('../assets/images/Imap-food.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={Assets.backgroundImages.headerBackground1}
            resizeMode="cover"
            style={styles.image}>
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <Header navigation={navigation} />
              <View style={{marginTop: 65}}>
                <View
                  style={{
                    marginTop: 40,
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

                    <View
                      style={{
                        paddingHorizontal: 10,
                        justifyContent: 'space-between',
                        marginTop: 40,
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
                        Alen Matias
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: Fonts.default,
                          fontWeight: '600',
                          fontSize: 14,
                          color: Colors.tertiary,
                          //   marginTop: 5,
                          opacity: 0.43,
                        }}>
                        @Alenmatias
                      </Text>
                    </View>
                  </View>
                  <TouchableRipple
                    style={{
                      paddingHorizontal: 10,
                      marginTop: 45,
                    }}>
                    <EditSvg />
                  </TouchableRipple>
                </View>

                {/* <SidebarButton /> */}
              </View>
            </View>
          </ImageBackground>

          <View style={{flexDirection: 'row', marginTop: 25}}></View>
          {/* Cards start */}

          <View
            style={{
              height: HEIGHT / 4.7,
              flexDirection: 'row',
              marginTop: 70,
              width: '90%',
              alignSelf: 'center',
            }}>
            <CourseCard
              CourseName="Complete Course"
              courseNumber="25"
              totalCourse="Total Session in roll"
              totalNumber="25"
            />
          </View>

          <View style={{marginVertical: 10}}>
            <FlatList
              horizontal={true}
              contentContainerStyle={{
                flexGrow: 1,
                // backgroundColor: 'red',
                paddingLeft: 10,
                paddingRight: 10,
              }}
              ItemSeparatorComponent={<View style={{margin: 5}} />}
              data={data}
              // scrollEnabled={false}
              renderItem={({item, index}) => (
                <WorkOutCard
                  item={item}
                  index={index}
                  WorkoutImage={item.WorkoutImage}
                  WorkoutName={item.WorkoutName}
                  WorkoutTime={item.WorkoutTime}
                  // setActiveButton={setActiveButton}
                  // activeButton={activeButton}
                />
              )}
            />
          </View>
          {/* <View style={styles.card}></View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
