import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Fonts} from '../assets/constants/Fonts';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';

const CourseCard = ({
  name,
  image,
  description,
  price,
  index,
  totalNumber,
  totalCourse,
  courseNumber,
  CourseName,
}) => {
  console.log(image);
  return (
    <View
      style={[
        styles.card,
        {
          marginRight: index % 2 == 0 ? 5 : 0,
          marginLeft: index % 2 == 0 ? 0 : 5,
        },
      ]}>
      <View
        style={{
          //   height: '50%',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'green',
        }}>
        <Text numberOfLines={1} style={styles.productName}>
          {CourseName}
        </Text>
        <Text numberOfLines={1} style={styles.productDesc}>
          {courseNumber}
        </Text>
      </View>
      <View
        style={{
          width: 1,
          backgroundColor: '#aaa',
          height: 55,
          alignSelf: 'center',
        }}></View>
      <View
        style={{
          //   height: '50%',
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          //   backgroundColor: 'pink',
        }}>
        <Text numberOfLines={1} style={styles.productName}>
          total{totalCourse}
        </Text>
        <Text numberOfLines={1} style={styles.productDesc}>
          {totalNumber}
        </Text>
      </View>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 91,
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
    elevation: 10,
    flexDirection: 'row',
  },
  productImage: {
    height: '45%',
  },
  productName: {
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#000',
  },
  productDesc: {
    fontSize: 14,
    fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#AAAAAA',
    marginVertical: 10,
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
