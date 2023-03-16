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
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {CloudSvg, SearchIcon} from '../assets/svgs/HomeSvgs';
import {Fonts} from '../assets/constants/Fonts';
import ProductCardlg from '../components/ProductCardlg';
import CardBox from '../components/CardBox';
import {BackSvg} from '../assets/svgs/HeaderSvgs';
import SessionCompo from '../components/SessionsComponent';
import Searcbar from '../components/SeacrBar';
import {
  CupIcon,
  SearchIConGrey,
  ShareICon,
  ShareIConBG,
  SimpleCupI,
  SimpleShareI,
  SimpleTeacherI,
  TeacherIconBG,
  index,
} from '../assets/svgs/SearchIcon';
import CardLG from '../components/CArdComponentLG';
import {FAB, TouchableRipple} from 'react-native-paper';

const SearchScreen = ({navigation}) => {
  var Carddata = [
    {
      backgroundColor: '#B0E8F3',
      textcolor: '#00B4D8',
      BGCardImag: Assets.cards.card2x,
      onpress: () => navigation.navigate('Shope'),
    },
    {
      backgroundColor: '#FADDBA',
      textcolor: '#F2AC57',
      BGCardImag: Assets.cards.card32x,
      onpress: () => navigation.navigate('Shope'),
    },
    {
      backgroundColor: '#E7C6C6',
      textcolor: '#C97272',
      BGCardImag: Assets.cards.card22x,
      onpress: () => navigation.navigate('Shope'),
    },
  ];
  var data1 = [
    {
      name: `All`,
      backgroundColor: '#FFFF',
      imagebackgroundColor1: '#FFFF',
      textcolor: Colors.primary,
    },
    {
      name: `Homework \nAssistance`,
      backgroundColor: '#FADDBA',
      imagebackgroundColor1: '#FADDBA',
      textcolor: '#F2AC57',
      image: <SimpleTeacherI />,
    },
    {
      name: `Social \nInteraction`,
      backgroundColor: '#C7EEF8',
      imagebackgroundColor1: '#C7EEF8',
      textcolor: '#FFFF',
      image: <SimpleShareI />,
    },
    {
      name: 'Skill \n Development',
      backgroundColor: '#E7C6C6',
      imagebackgroundColor1: '#E7C6C6',
      textcolor: '#fff',
      image: <SimpleCupI />,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={{padding: 15, flex: 1, paddingTop: 25}}>
            <HeaderComponent navigation={navigation} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              flex: 1,
            }}>
            <View style={{flex: 1}}>
              <Searcbar placeholder={'Search Mentor Here...'} />
            </View>
          </View>

          <View
            style={{
              // height: HEIGHT / 8.9,
              // flexDirection: 'row',
              // alignSelf: 'center',

              paddingBottom: 15,
              paddingTop: 15,
            }}>
            <FlatList
              scrollEnabled
              data={data1}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                paddingHorizontal: 15,
                // marginBottom: -15,
              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({item, index}) => (
                <View style={{}}>
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
          </View>
          <View
            style={{
              paddingHorizontal: 10,

              paddingHorizontal: 15,
              marginVertica: 20,
            }}>
            <Text style={styles.text}>Top Suggested Mentors:</Text>
          </View>

          <View style={{marginTop: 15}}>
            <FlatList
              data={Carddata}
              contentContainerStyle={{
                padding: 15,
                // marginTop: 10,
              }}
              ItemSeparatorComponent={<View style={{paddingVertical: 10}} />}
              renderItem={({item, index}) => (
                <SessionCompo
                  onPress={item.onpress}
                  BGCardImag={item.BGCardImag}
                  mentorSuggestions
                  backgroundColor={item.backgroundColor}
                  textColor={item.textcolor}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const HeaderComponent = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableRipple onPress={() => navigation.goBack()} style={styles.btn}>
        <BackSvg />
      </TouchableRipple>
    </View>
  );
};
export default SearchScreen;

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

  btn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
