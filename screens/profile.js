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
import WorkOutCard from '../components/WorkOutCard';
import GraphCompnent from '../components/GraphComponent';
import ProfileHeader from '../components/profileHeader';
const Profile = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <ProfileHeader
            BGImage={Assets.backgroundImages.headerBackground1}
            avatarId={'Alen Matias'}
            avatarName={'@Alenmatias'}
            navigation={navigation}
            EditIcon={true}
            header1
          />
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          {/* Cards start */}
          <View
            style={{
              height: HEIGHT / 6.2,
              flexDirection: 'row',
              marginTop: 10,
              // paddingVertical: 20,
              // width: '90%',
              alignSelf: 'center',
            }}>
            <CourseCard
              CourseName="Complete Course"
              courseNumber="25"
              totalCourse="Total Session in roll"
              totalNumber="25"
            />
          </View>
          <View
            style={{
              height: HEIGHT / 4.2,
              // flexDirection: 'row',
              // marginTop: 10,
              // width: '90%',
              alignSelf: 'center',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                flexGrow: 1,
                paddingLeft: 5,
                paddingRight: 8,
                paddingBottom: 10,
              }}
              ItemSeparatorComponent={<View style={{margin: 15}} />}
              data={data}
              renderItem={({item, index}) => (
                <WorkOutCard
                  backgroundColor={item.backgroundColor}
                  item={item}
                  index={index}
                  WorkoutImage={item.WorkoutImage}
                  WorkoutName={item.WorkoutName}
                  WorkoutTime={item.WorkoutTime}
                />
              )}
            />
          </View>

          <View
            style={{
              // marginTop: -20,
              paddingTop: 20,
              height: HEIGHT / 2.2,
              paddingBottom: 20,
              flexDirection: 'row',
              // marginTop: 45,
            }}>
            <GraphCompnent />
          </View>
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
const data = [
  {
    id: 1,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/dumbbell.png'),
    backgroundColor: '#eaeaea',
  },
  {
    id: 2,
    WorkoutName: 'Running',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/running.png'),
    backgroundColor: '#ECF9FF',
  },
  {
    id: 3,
    WorkoutName: 'Food',
    WorkoutTime: '1320 Kcal',
    WorkoutImage: require('../assets/images/Imap-food.png'),
    backgroundColor: '#E7C6C6',
  },
  {
    id: 4,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/dumbbell.png'),
    backgroundColor: '#eaeaea',
  },
  {
    id: 5,
    WorkoutName: 'Running',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/running.png'),
    backgroundColor: '#ECF9FF',
  },
];
