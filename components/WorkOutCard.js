import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const WorkOutCard = ({WorkoutImage, WorkoutName, WorkoutTime}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          zIndex: 1,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <View>
          <View style={{width: 60, height: 60, paddingLeft: 10}}>
            <Image
              source={WorkoutImage}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text
          numberOfLines={2}
          style={{
            marginTop: 15,
            paddingLeft: 25,
            // fontSize: WIDTH < 375 ? 10 : 12,
            // color: Colors.tertiary,
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
            paddingLeft: 25,

            marginTop: 15,
            color: '#aaa',
            // fontSize: WIDTH < 375 ? 10 : 12,
            // color: Colors.tertiary,
            fontFamily: Fonts.default,
            fontSize: 14,
            fontWeight: '300',

            lineHeight: WIDTH < 375 ? 13 : 16,
          }}>
          {WorkoutTime}
        </Text>
      </View>
    </View>
  );
};

export default WorkOutCard;

const styles = StyleSheet.create({
  card: {
    width: 142,
    height: 178,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // padding: 4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    flexDirection: 'row',
  },
  btn: {
    width: WIDTH < 375 ? 80 : 100,
    height: WIDTH < 375 ? 30 : 40,
    borderRadius: 20,
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: Colors.tertiary,
  },
});
