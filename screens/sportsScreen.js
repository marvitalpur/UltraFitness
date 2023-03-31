import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ProductCardlg from '../components/ProductCardlg';
import CardLG from '../components/CArdComponentLG';
import { FlatList } from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import { Colors } from '../assets/constants/Colors';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';

const SportsScreen = ({ navigation }) => {
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
      onPress: () =>
        navigation.navigate('ExcersizeDetail', {
          image1: Assets.cards.Ex1,
          text1: 'Excersie name ',
          text2: 'gsfgilkjgfddfghjk',
          bgColor: '#FBBF76',
        }),
    },
    {
      backgroundColor: '#FF856E',
      backgroundColor1: '#A42B32',
      backgroundColor2: '#D67314',
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      image1: Assets.cards.Ex2,
      onPress: () =>
        navigation.navigate('ExcersizeDetail', {
          image1: Assets.cards.Ex2,
          text1: 'Excersie name ',
          text2: 'gsfgilkjgfddfghjk',
          bgColor: '#FF856E',
        }),
    },
    {
      backgroundColor: '#4B89B0',
      backgroundColor2: '#B66842',
      backgroundColor1: '#A42B32',
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      image1: Assets.cards.Ex3,
      onPress: () =>
        navigation.navigate('ExcersizeDetail', {
          image1: Assets.cards.Ex3,
          text1: 'Excersie name ',
          text2: 'gsfgilkjgfddfghjk',
          bgColor: '#4B89B0',
        }),

    },
    {
      backgroundColor: '#83734F',
      backgroundColor1: '#5F3817',
      backgroundColor2: '#681515',
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      image1: Assets.cards.Ex4,
      onPress: () =>
        navigation.navigate('ExcersizeDetail', {
          image1: Assets.cards.Ex4,
          text1: 'Excersie name ',
          text2: 'gsfgilkjgfddfghjk',
          bgColor: '#83734F',
        }),
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ paddingHorizontal: 15 }}>
            <Header
              navigation={navigation}
              headertex="Exercise Session"
              backIcon1
            />
          </View>
          <View
            style={{
              height: HEIGHT / 3.7,
              flexDirection: 'row',
              marginTop: 45,
              paddingHorizontal: 15,
            }}>
            <ProductCardlg
              image3
              BtnTouchable2
              CardImageBG={Assets.cards.cardImage}
              // CardImageBGMain={Assets.cards.cardImage11}
              color1T="#000"
              BoxtText1="Sports Vision Training"
              BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
              BoxtbtnText={'Get your Mentor Here'}
            />
          </View>
          <FlatList
            data={data1}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 15,
              // marginBottom: -15,
            }}
            ItemSeparatorComponent={<View style={{}} />}
            renderItem={({ item, index }) => (
              <View
                style={{
                  // paddingLeft: 5,
                  marginTop: 20,
                  height: HEIGHT / 8.7,
                  flexDirection: 'row',

                  //   backgroundColor: 'red',
                }}>
                <CardLG
                  // flexDirection={'row'}
                  Wbox={true}
                  ItemImage={true}
                  image={item.image}
                  name={item.name}
                  progressName={item.progressName}
                  backgroundColor={item.backgroundColor}
                  textcolor={item.textcolor}
                />
              </View>
            )}
          />

          <View
            style={{
              paddingHorizontal: 10,

              paddingHorizontal: 15,
            }}>
            <Text style={styles.text}>Current Sessions:</Text>
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
              ItemSeparatorComponent={<View style={{ marginTop: 15 }} />}
              renderItem={({ item, index }) => (
                <SessionCompo
                  height={
                    WIDTH < 390 && WIDTH > 375 ? 15 : WIDTH < 375 ? 15 : 50
                  }
                  top={WIDTH < 390 && WIDTH > 375 ? -2 : WIDTH < 375 ? 18 : 25}
                  right={WIDTH < 390 && WIDTH > 375 ? 25 : WIDTH < 375 ? 2 : 15}
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

export default SportsScreen;
