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
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { Colors } from '../assets/constants/Colors';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import Assets from '../assets';
import { Avatar, TouchableRipple } from 'react-native-paper';
import { Fonts } from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import { EditSvg, NotificationSvg } from '../assets/svgs/HeaderSvgs';
import CourseCard from '../components/CourseCard';
import WorkOutCard from '../components/WorkOutCard';
import GraphCompnent from '../components/GraphComponent';
import ProfileHeader from '../components/profileHeader';
const Profile = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <ProfileHeader
            BGImage={Assets.backgroundImages.headerBackground1}
            avatarId={'Alen Matias'}
            avatarName={'@Alenmatias'}
            navigation={navigation}
            EditIcon={true}
            header1
          />
        </View>
        <View style={{}}>
          {/* Cards start */}
          <View
            style={{
              height: HEIGHT / 6.6,
              flexDirection: 'row',
              marginTop: 10,
              // paddingVertical: 10,
              // width: '90%',
              paddingHorizontal: 15,
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
              height: HEIGHT / 3.2,
              // paddingHorizontal: 5,
              flexDirection: 'row',
              alignSelf: 'center',

            }}>
            <WorkOutCard />
          </View>

          <View
            style={{
              // marginTop: -20,
              // paddingTop: 10,
              height: HEIGHT / 2.0,
              paddingBottom: 5,
              flexDirection: 'row',
              paddingHorizontal: 15,
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
