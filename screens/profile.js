import React from 'react';
import Lottie from 'lottie-react-native';
import {

  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Assets from '../assets';
import { Fonts } from '../assets/constants/Fonts';
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
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <ProfileHeader
            BGImage={Assets.backgroundImages.headerBackground1}
            avatarId={'Alen Matias'}
            avatarName={'@Alenmatias'}
            navigation={navigation}
            EditIcon={true}
            header1
          />
        </View>

        <View
          style={{
            flex: 1,
            // height: HEIGHT / 6.1,
            // flexDirection: 'row',
            paddingHorizontal: 15,
            backgroundColor: 'yellow',
            // alignSelf: 'center',
            // marginTop: 'auto',
            // paddingVertical: 10,
            // backgroundColor: 'red',
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
            flex: 1,
            padding: 5,
            paddingTop: 15,
            // backgroundColor: 'green',
            // height: HEIGHT / 3.8,
            // flexDirection: 'row',
            // alignSelf: 'center',
            marginTop: 'auto',
            // backgroundColor: '#ffff',
          }}>
          <WorkOutCard />
        </View>

        <View
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            // height: HEIGHT / 3.3,
            // // paddingBottom: 15,
            // flexDirection: 'row',
            paddingHorizontal: 25,
            // marginTop: 15,
            // paddingVertical: 10,
            // marginBottom: 25,
          }}>
          <GraphCompnent />
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
    paddingBottom: 'auto',
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
