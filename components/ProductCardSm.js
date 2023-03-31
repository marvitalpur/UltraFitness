import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../assets/constants/Colors';
import {WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
const ProductCardSm = ({img, text, OnpresCard, cardicon}) => {
  return (
    <TouchableRipple onPress={OnpresCard} style={styles.bannerSmallBox}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <Text style={styles.cardText}>{text}</Text>
        {cardicon && (
          <CardIcon
            style={{marginLeft: 'auto'}}
            name={'qrcode'}
            size={WIDTH < 375 ? 20 : 30}
            color={Colors.tertiary}
          />
        )}
      </ImageBackground>
    </TouchableRipple>
  );
};

export default ProductCardSm;

const styles = StyleSheet.create({
  bannerSmallBox: {flex: 1, borderRadius: 20},
  image: {
    flex: 1,
    padding: WIDTH < 375 ? 5 : 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  cardText: {
    width: '50%',
    // marginTop: 'auto',
    fontFamily: Fonts.default,
    fontSize: WIDTH < 375 ? 12 : 14,
    fontWeight: '500',
    color: Colors.tertiary,
  },
});
