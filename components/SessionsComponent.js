import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';
import { Colors } from '../assets/constants/Colors';
import { WIDTH } from '../assets/constants/Dimensions';
import { Avatar, TouchableRipple, FAB } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import Assets from '../assets';
import RatingsItems from './RatingsItems';
import CardBox from './CardBox';
import { PlayIcon } from '../assets/svgs/HomeSvgs';

const SessionCompo = ({
  name,
  image,
  playcompo,
  textColor,
  index,
  backgroundColor,
  backgroundColor1,
  backgroundColor2,
  progressName,
  onPress,
  progressColor,
  progresstextColor,
  mentorSuggestions,
  SessionCompo,
  progresscompo,
  BGCardImag,
  ExerciseCompo,
}) => {
  return (
    <>
      {progresscompo && (
        <>
          <View style={{ width: '100%', padding: 10 }}>
            <View
              style={[
                styles.card,
                {
                  flexDirection: 'row',
                  // marginBottom: 5,
                  // backgroundColor: backgroundColor,
                  // marginRight: index % 2 == 2 ? 0 : 5,
                  // marginLeft: index % 2 == 0 ? 0 : 5,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginTop: 10,
                  // paddingHorizontal: 5,
                  // paddingVertical: 5,
                }}>
                <View style={{}}>
                  <View style={{}}>{image}</View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text numberOfLines={1} style={styles.name}>
                    {name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.progressName,
                      { color: progresstextColor, marginTop: 5 },
                    ]}>
                    {progressName}
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={[
                      styles.progressName,
                      { textAlign: 'right', fontSize: 12, paddingHorizontal: 10 },
                    ]}>
                    22 video
                  </Text>
                  <View
                    style={{
                      marginTop: 18,
                      paddingHorizontal: 5,
                      backgroundColor: backgroundColor,
                      justifyContent: 'center',
                      paddingVertical: 5,
                      marginLeft: 15,
                      borderRadius: 10,
                    }}>
                    <Progress.Bar
                      progress={0.5}
                      width={110}
                      showsText={true}
                      color={progressColor}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
      {mentorSuggestions && (
        <>
          <View style={styles.box}>
            <View style={styles.container}>
              <ImageBackground
                source={BGCardImag}
                style={styles.image}
                resizeMode="stretch">
                <View
                  style={{
                    alignSelf: 'flex-start',
                    width: '65%',
                    flexDirection: 'row',
                    paddingTop: 10,
                    // justifyContent: 'space-between',
                  }}>
                  <Avatar.Image
                    size={68}
                    style={{
                      // width: '100%',
                      // height: '100%',
                      borderRadius: 100,
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      // alignItems: 'center',
                    }}
                    source={Assets.logos.avatarPlaceholder}
                  />
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 15,
                      marginBottom: 25,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Fonts.default,
                        fontWeight: '600',
                        fontSize: 16,
                        opacity: 0.85,
                        color: Colors.tertiary,
                      }}>
                      Martin Kalisco
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Fonts.default,
                        fontWeight: '600',
                        fontSize: 16,
                        color: Colors.tertiary,
                        paddingLeft: 5,

                        opacity: 0.43,
                      }}>
                      @martinKalisco
                    </Text>
                  </View>
                </View>
                <TouchableRipple
                  onPress={onPress}
                  style={[styles.btn, { borderRadius: 100 }]}>
                  <View style={styles.wbtn}>
                    <Text
                      style={{
                        fontFamily: Fonts.default,
                        color: Colors.tertiary,
                        fontSize: 14,
                        paddingHorizontal: 25,
                        opacity: 0.65,
                        // marginTop: 10,
                      }}>
                      Book Now
                    </Text>
                  </View>
                </TouchableRipple>
              </ImageBackground>
            </View>

            <View
              style={{
                width: WIDTH / 2.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{ width: WIDTH / 2.1, marginTop: 10 }}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.productDesc,
                    { fontSize: 14, color: '#00C569' },
                  ]}>
                  <Text style={[styles.progressName, {}]}>Reviews :</Text>
                  <RatingsItems />
                </Text>
              </View>
              <View style={{ width: WIDTH / 2.5 }}>
                <CardBox
                  name="Social Interection"
                  backgroundColor={backgroundColor}
                  textcolor={textColor}
                />
              </View>
            </View>
          </View>
        </>
      )}

      {ExerciseCompo && (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={[
              styles.card1,
              {
                height: 165,
                marginBottom: 5,
                backgroundColor: backgroundColor,
                marginRight: index % 2 == 2 ? 0 : 5,
                marginLeft: index % 2 == 0 ? 0 : 5,
              },
            ]}>
            <View
              style={[
                {
                  flexDirection: 'row',
                },
              ]}>
              <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Text
                  numberOfLines={1}
                  style={{ paddingTop: 30, color: Colors.secondary }}>
                  Excersie Name
                </Text>

                <Text
                  numberOfLines={2}
                  style={[
                    styles.productName,
                    { color: Colors.secondary, paddingVertical: 10 },
                  ]}>
                  Lorem ipsum dolor sit amet,
                  {'\n'} consetetur sadipscing elitr.
                </Text>
              </View>
              <View
                style={{
                  height:
                    WIDTH < 390 && WIDTH >= 375 ? 15 : WIDTH < 375 ? 15 : 50,
                  position: 'absolute',
                  top: WIDTH < 390 && WIDTH >= 375 ? -2 : WIDTH < 375 ? 18 : 25,
                  right:
                    WIDTH < 390 && WIDTH >= 375 ? 25 : WIDTH < 375 ? 2 : 15,
                  zIndex: 10,
                }}>
                <Image
                  source={image}
                  // style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
              <View
                style={[
                  styles.wbtn,
                  {
                    height: 38,
                    backgroundColor: backgroundColor2,
                  },
                ]}>
                <Text
                  style={{
                    fontFamily: Fonts.default,
                    color: Colors.secondary,
                    fontSize: 14,
                    paddingHorizontal: 10,
                    opacity: 0.65,
                    // marginTop: 10,
                  }}>
                  Book Now
                </Text>
              </View>
              <View
                style={[
                  styles.wbtn,
                  {
                    height: 38,
                    backgroundColor: backgroundColor1,
                    marginLeft: 10,
                  },
                ]}>
                <Text
                  style={{
                    fontFamily: Fonts.default,
                    color: Colors.secondary,
                    fontSize: 14,
                    paddingHorizontal: 10,
                    opacity: 0.65,
                    // marginTop: 10,
                  }}>
                  Book Now
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
      {playcompo && (
        <>
          <TouchableOpacity onPress={onPress} style={{ width: '100%', padding: 10 }}>
            <View
              style={[
                styles.card,
                {
                  height: 106,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  // marginBottom: 5,
                  justifyContent: 'center',

                  backgroundColor: '#fff',
                  // marginLeft: index % 2 == 0 ? 0 : 5,
                  // marginRight: index % 2 == 0 ? 0 : 5,
                  // paddingLeft: index % 2 == 0 ? 0 : 5,
                  // paddingRight: index % 2 == 0 ? 0 : 5,
                },
              ]}>
              <View style={{ backgroundColor: backgroundColor }}>
                <View
                  style={{
                    justifyContent: 'center',
                    height:
                      WIDTH < 390 && WIDTH >= 375 ? 85 : WIDTH < 375 ? 15 : 50,
                    // position: 'absolute',
                    //     ? -62
                    // top:
                    //   WIDTH < 390 && WIDTH >= 375
                    //     : WIDTH < 375
                    //     ? 78
                    //     : -55,

                    zIndex: 10,
                  }}>
                  <Image
                    source={image}
                    // style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <Text
                numberOfLines={3}
                style={[
                  styles.progressName,
                  { color: progresstextColor, width: '60%' },
                ]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
              <View
                style={{
                  backgroundColor: backgroundColor,

                  borderRadius: 10,
                  alignSelf: 'flex-end',
                }}>
                <PlayIcon />
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default SessionCompo;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 86,
    // width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 86,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  card1: {
    flex: 1,

    // width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingLeft: 15,
    // alignItems: 'center',
    // padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 10,
    // borderRadius: 20,
    // paddingHorizontal: 10,
    justifyContent: 'center',
    // marginVertical: 10,
    overflow: 'hidden',
    // marginTop: -15,
  },
  image: {
    flex: 1,
    paddingHorizontal: 5,
    resizeMode: 'cover',
    // justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
    // backgroundColor: '#000000a0',
    // margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  box: {
    width: '100%',
    marginTop: 10,
    // paddingHorizontal: 10,
    // padding: 10,
    borderRadius: 25,
    height: 'auto',
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  bgImg: {
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
  },

  progressName: {
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    color: Colors.tertiary,
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    fontSize: 16,
  },
  productDesc: {
    // fontSize: 12,
    // fontFamily: Fonts.default,
    // fontWeight: '300',
    // color: '#AAAAAA',
  },
  priceBox: {
    width: '70%',
    height: 28,
    backgroundColor: '#ECF9FF',
    marginLeft: 'auto',
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.tertiary,
  },
  wbtn: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffff',
    borderRadius: 30,
  },
});
