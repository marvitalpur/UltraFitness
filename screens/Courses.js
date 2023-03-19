import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { CloudSvg } from '../assets/svgs/HomeSvgs';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import { HEIGHT } from '../assets/constants/Dimensions';
import ProductCardmd from '../components/ProductCardmd';
import ProductCardlg from '../components/ProductCardlg';
import CardLG from '../components/CArdComponentLG';
import { FlatList } from 'react-native';
import { CupIcon, ShareIConBG, SimpleCupI, SimpleShareI, TeacherIconBG } from '../assets/svgs/SearchIcon';
import SessionCompo from '../components/SessionsComponent';

const Courses = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, paddingHorizontal: 25 }}>
            <Header
              headercompo1 navigation={navigation}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <View style={{ alignItems: 'center', paddingLeft: 15 }}>
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
              style={{ flex: 1, justifyContent: 'space-evenly', marginLeft: 10 }}>
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
                  height: HEIGHT / 8.7,
                  flexDirection: 'row',
                  marginTop: 35,
                }}>
                <CardLG
                  // flexDirection={'row'}
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
              height: HEIGHT / 4.7,
              flexDirection: 'row',
              marginTop: 45,
              paddingHorizontal: 15
            }}>
            <ProductCardlg
              image2
              BtnTouchable2
              CardImageBG={Assets.cards.cardImage9}
              CardImageBGMain={Assets.cards.cardImage11}
              BoxtText1="Kids Hope"
              BoxtText2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
              BoxtbtnText={'Get your Mentor Here'}
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
              height: 200,
              // backgroundColor: 'red',
              // paddingHorizontal: 15,
            }}>
            <FlatList
              data={data}
              contentContainerStyle={{
                flexGrow: 1,
                // marginTop: 20,
              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({ item, index }) => (
                <SessionCompo
                  progresscompo
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
        </ScrollView>
      </SafeAreaView>

    </>
  )
}
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

})
var data1 = [
  {
    name: `Homework \nAssistance`,
    backgroundColor: '#FADDBA',
    imagebackgroundColor1: '#FADDBA',
    textcolor: '#F2AC57',
    image: <SimpleShareI />
  },
  {
    name: `Social \nInteraction`,
    backgroundColor: '#C7EEF8',
    imagebackgroundColor1: '#C7EEF8',
    textcolor: '#FFFF',
    image: <SimpleShareI />
  },
  {
    name: 'Skill \n Development',
    backgroundColor: '#E7C6C6',
    imagebackgroundColor1: '#E7C6C6',
    textcolor: '#fff',
    image: <SimpleCupI />
  },
];
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

export default Courses

