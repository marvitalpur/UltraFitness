import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Header from '../components/Header';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { CloudSvg, SearchIcon } from '../assets/svgs/HomeSvgs';
import { Fonts } from '../assets/constants/Fonts';
import ProductCardlg from '../components/ProductCardlg';
import CardBox from '../components/CardBox';
import { BackSvg } from '../assets/svgs/HeaderSvgs';
import SessionCompo from '../components/SessionsComponent';
import {
  CupIcon,
  SearchIConGrey,
  ShareICon,
  ShareIConBG,
  SimpleCupI,
  SimpleShareI,
  SimpleTeacherI,
  TeacherIconBG,
  index
} from '../assets/svgs/SearchIcon';


const Courses = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 15 }}>
            <Header navigation={navigation} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 25 }}>
              <Lottie
                source={Assets.animation.onboardAnimationSun}
                style={{
                  width: 80,
                  height: 80,
                  marginBottom: -35,
                  marginLeft: -1,
                }}
                autoPlay
                loop
              />
              <CloudSvg />
            </View>
            <View
              style={{ flex: 1, justifyContent: 'space-evenly', }}>
              <Text style={styles.text}>Good</Text>
              <Text style={styles.text}>Morning!</Text>
              <Text
                style={[
                  styles.text,
                  { letterSpacing: 0.6, fontSize: 12, fontWeight: '300' },
                ]}>
                23 December 2023
              </Text>
            </View>
          </View>
          <View style={{
            marginRight: index % 2 == 10 ? 5 : 10,
            marginLeft: index % 2 == 10 ? 10 : 0,
          }}>
            <View
              style={{
                marginRight: 10,
                marginLeft: 15,
                height: HEIGHT / 4.6,
                flexDirection: 'row',
                marginTop: 45,
                // paddingHorizontal: 10
              }}>
              <ProductCardlg
                BtnTouchable2
                CardImageBG={Assets.cards.cardImage9}
                CardImageBGMain={Assets.cards.cardImage11}
                BoxtText1="Kids Hope"
                BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
                BoxtbtnText={'Go Now'}
              />
            </View>

          </View>

          <View
            style={{
              height: HEIGHT / 5.9,
              flexDirection: 'row',
              alignSelf: 'center',
              //   paddingBottom: 5,
              marginTop: 10,
              paddingLeft: 15
            }}>
            <FlatList
              data={data1}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                // paddingVertical: 25,
                // marginBottom: -15,
                marginVertical: 10,
              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.card,
                    {
                      backgroundColor: item.imagebackgroundColor1,
                      marginRight: index % 5 == 2 ? 0 : 5,
                      marginLeft: index % 5 == 0 ? 0 : 5,
                      width: 140,
                      height: 75,
                      opacity: 0.8,
                      marginTop: 5,
                      marginBottom: 25,
                    },
                  ]}>
                  <CardBox
                    flexDirection={'row'}
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
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              marginTop: 15,
              paddingHorizontal: 15,
            }}>
            <Text style={styles.text}>Current Sessions:</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
            }}>
            <FlatList
              data={data}
              contentContainerStyle={{
                // padding: 25,
                marginTop: 10,
              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({ item, index }) => (
                <SessionCompo
                  index={index}
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  progressName={item.progressName}
                  textColor={item.textcolor}
                  progressColor={item.progressColor}
                  progresstextColor={item.backgroundColor}
                  description={item.description}
                  image={item.image1}
                />
              )}></FlatList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Courses;

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
  card: {
    // width: '90%',

    flex: 1,
    height: 86,
    // backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
var data = [
  {
    name: `Session Name`,
    progressName: 'Social Interection',
    backgroundColor: '#B0E8F3',
    progressColor: '#F2AC57',
    progressColor: '#00B4D8',
    textcolor: '#F2AC57',

    image1: <ShareIConBG />,
    progressName: 'Session Name',
  },
  {
    name: `Session Name`,
    progressName: 'Social Interection',
    backgroundColor: '#FADDBA',
    textcolor: '#FFFF',
    progressColor: '#F2AC57',
    progressName: 'Session Name',

    image1: <TeacherIconBG />,
  },
  {
    name: `Session Name`,
    progressName: 'Social Interection',
    backgroundColor: '#E7C6C6',
    textcolor: '#FFF',
    progressName: 'Session Name',
    progressColor: '#C97272',

    image1: <CupIcon />,
  },
];
var data1 = [
  {
    name: 'Homework Assistance',
    backgroundColor: '#FADDBA',
    imagebackgroundColor1: '#FADDBA',
    textcolor: '#F2AC57',
    image: <SimpleTeacherI />,
  },
  {
    name: 'Social Interaction',
    backgroundColor: '#C7EEF8',
    imagebackgroundColor1: '#C7EEF8',
    textcolor: '#00B4D8',
    image: <SimpleShareI />,
  },
  {
    name: 'Skill Development',
    backgroundColor: '#E7C6C6',
    imagebackgroundColor1: '#E7C6C6',
    textcolor: '#E9A6A6',
    image: <SimpleCupI />,
  },
];
