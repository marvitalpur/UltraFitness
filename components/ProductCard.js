import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Fonts } from '../assets/constants/Fonts';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({
  name,
  image,
  description,
  price,
  index,
  fontWeight,
  color,
}) => {
  console.log(image);
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          marginRight: index % 2 == 0 ? 5 : 0,
          marginLeft: index % 2 == 0 ? 0 : 5,
        },
      ]}>
      <View style={styles.productImage}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: WIDTH / 4.5,
            height: WIDTH / 4.5,
            marginLeft: 'auto',
          }}
        />
      </View>
      <View style={{ height: '55%' }}>
        <Text
          numberOfLines={1}
          style={[styles.productName, { fontWeight: fontWeight, color: color }]}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.productDesc}>
          {description}
        </Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>${price}/kg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 175,
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
  productImage: {
    height: '45%',
  },
  productName: {
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#AAAAAA',
  },
  productDesc: {
    fontSize: 12,
    fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#AAAAAA',
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
