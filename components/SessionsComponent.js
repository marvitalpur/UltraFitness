import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';

import { ProgressBar, MD3Colors } from 'react-native-paper';
import { SearchIcon } from '../assets/svgs/HomeSvgs';
import { List } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import ColorBox from './ColorBox';

const SessionCompo = ({
  name,
  image,
  description,
  price,
  index,
  backgroundColor,
  progressName,
  textColor,
  progressColor,
  progresstextColor,
}) => {
  return (
    <>
      <View
        style={[
          styles.card,
          {
            flexDirection: 'row',
            marginBottom: 10,
            // // backgroundColor: backgroundColor,
            // marginRight: index % 2 == 2 ? 0 : 10,
            // marginLeft: index % 2 == 0 ? 0 : 5,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginTop: 10,
          }}>
          <View style={{ width: 64, height: 64 }}>
            <View style={{ width: '20%' }}>{image}</View>
          </View>
          <View style={{ width: '32%', marginTop: 10 }}>
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
                progress={0.3}
                width={110}
                showsText={true}
                color={progressColor}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SessionCompo;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 86,
    width: '100%',
    backgroundColor: '#FFFFFF',
    // justifyContent: "center",
    // alignItems: 'center',
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
  productImage: {
    height: '45%',
    borderRadius: 100,
    marginTop: 25,
    backgroundColor: 'red',
  },
  name: {
    // width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#000',
    fontSize: 16,
  },
  progressName: {
    // width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    fontSize: 14,
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
});

// var data = [
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage1,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage2,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage3,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage4,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage5,
//     },
//     {
//         name: 'product 1',
//         price: '36',
//         description: 'jkskbycsdubfg',
//         image: Assets.cards.cardImage6,
//     },
// ];
