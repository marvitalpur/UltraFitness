import React from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet, Text, ScrollView, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import ProfileHeader from '../components/profileHeader';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {TouchableRipple} from 'react-native-paper';
import {EditSvg} from '../assets/svgs/HeaderSvgs';
import ButtonComponent from '../components/Button';
import ColorBox from '../components/ColorBox';
import CardBox from '../components/CardBox';
const Shope = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <ProfileHeader
            BGImage={Assets.backgroundImages.headerBackground2}
            avatarId={'@rubelmuricio'}
            avatarName={'Rubel Muricio'}
            onPress={() => navigation.goBack()}
            // EditIcon={true}
            header2
            rating
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 1, top: 10}}>
            <Text
              style={{
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                color: Colors.tertiary,
                paddingLeft: 15,
                marginTop: 'auto',
                marginBottom: 'auto',
                // backgroundColor: 'red',
              }}>
              Skills:
            </Text>
          </View>
          <View
            style={{
              // height: HEIGHT / 8.9,
              flex: 1,
              //   flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 'auto',
              // paddingBottom: 10,
              // backgroundColor: 'green',
            }}>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                // paddingVertical: 5,
                // padding: 10,
                paddingLeft: 15,
              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({item, index}) => (
                <CardBox
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  textcolor={item.textcolor}
                />
              )}
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                flex: 1,
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                // paddingTop: 10,
                color: Colors.tertiary,
                paddingLeft: 15,
              }}>
              Description:
            </Text>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 14,
                color: Colors.tertiary,
                opacity: 0.43,
                paddingLeft: 15,
                paddingTop: 15,
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Text>
          </View>
          <Text
            style={{
              // textAlign: 'center',
              marginTop: 'auto',
              fontFamily: Fonts.default,
              fontWeight: '600',
              fontSize: 18,
              color: Colors.tertiary,
              paddingLeft: 15,
              // marginVertical: 15,
              paddingTop: 5,
            }}>
            Schedule:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingLeft: 15,
            }}>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                color: Colors.tertiary,
                alignSelf: 'flex-start',
              }}>
              August 2023
            </Text>
            <TouchableRipple
              style={{
                paddingHorizontal: 10,
                //   marginTop: 45,
              }}>
              <EditSvg />
            </TouchableRipple>
          </View>
          <View
            style={{
              height: HEIGHT / 6.2,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 5,
            }}>
            <ColorBox />
          </View>
          <View
            style={{
              height: WIDTH <= 375 ? 40 : 55,
              width: WIDTH <= 323 ? 233 : 260,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: Colors.primary,
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            <ButtonComponent
              icon1
              buttonText="Book Appointment"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              // onPress={() => navigation.goBack()}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 323 ? 233 : 260}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Shope;
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
  texline: {
    // width: '100%',
    paddingLeft: 5,
    marginBottom: 2,
    flexDirection: 'row',
    // alignSelf: 'center',
    // justifyContent: 'space-between',
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
var data = [
  {
    name: 'Homework Assistance',
    backgroundColor: '#FADDBA',
    textcolor: '#F2AC57',
  },
  {
    name: 'Social Interaction',
    backgroundColor: '#C7EEF8',
    textcolor: '#00B4D8',
  },
  {
    name: 'Skill Development',
    backgroundColor: '#E7C6C6',
    textcolor: '#E9A6A6',
  },
];
