import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
const ProductCardSm = ({img, text}) => {
  return (
    <TouchableRipple style={styles.bannerSmallBox}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <CardIcon
          style={{marginLeft: 'auto'}}
          name={'play-circle-outline'}
          size={WIDTH < 375 ? 20 : 30}
          color={Colors.tertiary}
        />
        <Text style={styles.cardText}>{text}</Text>
      </ImageBackground>
    </TouchableRipple>
  );
};


export default ProductCardSm;

const styles = StyleSheet.create({
  bannerSmallBox: {flex: 1, borderRadius: 20},
  image: {flex: 1, padding: WIDTH < 375 ? 5 : 10},
  cardText: {
    marginTop: 'auto',
    fontFamily: Fonts.default,
    fontSize: WIDTH < 375 ? 12 : 14,
    fontWeight: '400',
    color: Colors.tertiary,
  },
});
