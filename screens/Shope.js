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
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';
import ProfileHeader from '../components/profileHeader';
import Assets from '../assets';
import WorkOutCard from '../components/WorkOutCard';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {TouchableRipple} from 'react-native-paper';
import {EditSvg} from '../assets/svgs/HeaderSvgs';
import ButtonComponent from '../components/Button';
import ColorBox from '../components/ColorBox';
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
            navigation={navigation}
            // EditIcon={true}
            rating
          />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 15,
            }}>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                color: Colors.tertiary,
              }}>
              Skills:
            </Text>

            <View style={{paddingVertical: 20}}>
              <View
                style={{
                  height: HEIGHT / 9.9,
                  flexDirection: 'row',
                  marginTop: 10,

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
                    paddingBottom: 8,
                  }}
                  ItemSeparatorComponent={<View style={{margin: 5}} />}
                  data={data}
                  renderItem={({item, index}) => (
                    <WorkOutCard
                      backgroundColor={item.backgroundColor}
                      item={item}
                      index={index}
                      boxtext
                      DescriptionText={item.DescriptionText}
                      textcolor={item.textcolor}
                    />
                  )}
                />
              </View>
            </View>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                paddingTop: 10,
                color: Colors.tertiary,
              }}>
              Skills:
            </Text>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 14,
                paddingTop: 10,
                color: Colors.tertiary,
                opacity: 0.43,
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod.
            </Text>
            <Text
              style={{
                // textAlign: 'center',
                paddingTop: 30,
                fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 18,
                color: Colors.tertiary,
              }}>
              Schedule:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 20,
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
                height: HEIGHT / 5.4,
                flexDirection: 'row',
                // marginTop: 10,

                // width: '90%',
                alignSelf: 'center',
              }}>
              <ColorBox />
            </View>

            <View
              style={{
                // marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonComponent
                icon1
                buttonText="Book Appointment"
                buttonColor={Colors.primary}
                textColor={Colors.secondary}
                // onPress={() => navigation.goBack()}
                height={WIDTH <= 375 ? 40 : 55}
                width={WIDTH <= 375 ? 323 : 323}
              />
            </View>
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
});
const data = [
  {
    id: 1,
    DescriptionText: 'Homework Assistance',
    backgroundColor: '#FADDBA',
    textcolor: '#F2AC57',
  },
  {
    id: 2,
    DescriptionText: 'Social Interaction',
    backgroundColor: '#C7EEF8',
    textcolor: '#00B4D8',
  },
  {
    id: 3,
    DescriptionText: 'Skill Development',
    backgroundColor: '#E7C6C6',
    textcolor: '#E9A6A6',
  },
];
