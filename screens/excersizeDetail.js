import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {FlatList} from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';

const ExcersizeDetail = ({navigation, route}) => {
  const {image1} = route.params;
  const {Exercisename1} = route.params;
  const {Exercisename2} = route.params;

  var data = [
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image1,
      progressName: '',
    },
    {
      progressName: 'Social Interection',

      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image2,
      progressName: '',
    },
    {
      progressName: 'Social Interection',

      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image3,
      progressName: '',
    },
    {
      progressName: 'Social Interection',

      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.ProfileImages.image1,
      progressName: '',
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{paddingHorizontal: 15}}>
            <Header navigation={navigation} headertex="Details" backIcon1 />
          </View>
          <View
            style={{
              // height: 200,
              marginTop: 20,
              // backgroundColor: 'red',
            }}>
            <View style={{paddingHorizontal: 10}}>
              <SessionCompo
                // height={WIDTH < 390 && WIDTH > 375 ? 5 : WIDTH < 375 ? 50 : 10}
                // top={WIDTH < 390 && WIDTH > 375 ? -22 : WIDTH < 375 ? 28 : 65}
                // right={WIDTH < 390 && WIDTH > 375 ? 275 : WIDTH < 375 ? 32 : 65}
                height={
                  WIDTH < 390 && WIDTH >= 375 ? 125 : WIDTH < 375 ? 135 : 100
                }
                top={
                  WIDTH < 390 && WIDTH >= 375 ? -35 : WIDTH < 375 ? -10 : -10
                }
                right={
                  WIDTH < 390 && WIDTH >= 375 ? -100 : WIDTH < 375 ? -100 : -100
                }
                image={image1}
                text1={Exercisename1}
                text2={Exercisename2}
                ExerciseCompo
                backgroundColor="#FBBF76"
                backgroundColor1="#486B81"
                backgroundColor2="#EC8117"
              />
            </View>
            <View style={{}}>
              <FlatList
                data={data}
                contentContainerStyle={{marginTop: 10}}
                renderItem={({item, index}) => (
                  <SessionCompo playcompo image={item.image1} />
                )}></FlatList>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    // fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    // color: Colors.tertiary,
    color: '#000',
    letterSpacing: 0.9,
  },
});

export default ExcersizeDetail;
