import {
  Image,
  ImageBackground,
  index,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Colors} from '../assets/constants/Colors';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';

const WorkOutCard = ({
  index,
  WorkoutImage,
  WorkoutName,
  WorkoutTime,
  backgroundColor,
  DescriptionText,
  textcolor,
  height,
  boxtext,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          height: height,
          backgroundColor: backgroundColor,
          marginRight: index % 2 == 0 ? 5 : 0,
          marginLeft: index % 2 == 0 ? 0 : 5,
        },
      ]}>
      <View
        style={{
          flex: 1,
          zIndex: 1,
          borderRadius: 20,
          overflow: 'hidden',
          // paddingEnd: 5,
          marginHorizontal: 10,
        }}>
        <View>
          <View style={[styles.productImage, {marginTop: 10}]}>
            <Image
              source={WorkoutImage}
              resizeMode="contain"
              style={{
                width: 36,
                height: 44,
                // marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </View>
        </View>

        <View
          style={{
            // marginTop: 20,
            alignSelf: 'flex-start',
          }}>
          <Text
            numberOfLines={2}
            style={{
              marginTop: 30,
              // paddingLeft: 15,
              fontSize: WIDTH < 375 ? 10 : 12,
              color: Colors.tertiary,
              color: '#000',
              fontFamily: Fonts.default,
              fontWeight: '300',
              fontSize: 12,
              lineHeight: WIDTH < 375 ? 13 : 16,
            }}>
            {WorkoutName}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              paddingLeft: 8,
              marginTop: 8,
              color: '#aaa',
              fontSize: WIDTH < 375 ? 10 : 12,
              color: Colors.cards.GreyText,
              fontFamily: Fonts.default,
              fontSize: 14,
              fontWeight: '300',
              lineHeight: WIDTH < 375 ? 13 : 16,
            }}>
            {WorkoutTime}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WorkOutCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,

    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  btn: {
    width: WIDTH < 375 ? 50 : 100,
    height: WIDTH < 375 ? 30 : 40,
    borderRadius: 20,
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: Colors.tertiary,
  },
  productImage: {
    height: '35%',
  },
});
