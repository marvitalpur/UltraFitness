import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ProductCardlg from '../components/ProductCardlg';
import CardLG from '../components/CArdComponentLG';
import {FlatList} from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {HEIGHT} from '../assets/constants/Dimensions';

const ExcersizeDetail = ({navigation, route}) => {
  const {image1} = route.params;
  const {Exname} = route.params;

  var data1 = [
    {
      name: `All`,
      backgroundColor: '#FFFF',
      imagebackgroundColor1: '#FFFF',
      textcolor: Colors.primary,
    },
    {
      name: `Daily Sessions`,
      backgroundColor: '#FADDBA',
      imagebackgroundColor1: '#FADDBA',
      textcolor: '#F2AC57',
    },
    {
      name: `Weekly Sessions`,
      backgroundColor: '#C7EEF8',
      imagebackgroundColor1: '#C7EEF8',
      textcolor: '#FFFF',
    },
    {
      name: 'Skill \n Development',
      backgroundColor: '#E7C6C6',
      imagebackgroundColor1: '#E7C6C6',
      textcolor: '#fff',
    },
  ];
  var data = [
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.cards.Ex1,
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
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
              height: 200,
              height: HEIGHT / 1.0,
              marginTop: 20,
              paddingBottom: 10,
              // backgroundColor: 'red',
              // paddingHorizontal: 15,
            }}>
            <FlatList
              data={data}
              contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: 15,
              }}
              ItemSeparatorComponent={<View style={{marginTop: 15}} />}
              renderItem={({item, index}) => (
                <SessionCompo
                  ExerciseCompo
                  index={index}
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  backgroundColor1={item.backgroundColor1}
                  backgroundColor2={item.backgroundColor2}
                  progressName={item.progressName}
                  textColor={item.textcolor}
                  progressColor={item.progressColor}
                  progresstextColor={item.backgroundColor}
                  image={item.image1}
                  onPress={item.onPress}
                />
              )}></FlatList>
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
