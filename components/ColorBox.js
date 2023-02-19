import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';

import ProductCard from './ProductCard';
import { Fonts } from '../assets/constants/Fonts';
import Assets from '../assets';
import { WIDTH } from '../assets/constants/Dimensions';
import { Colors } from '../assets/constants/Colors';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const ColorBox = props => {
  return (
    <View>
      <View style={styles.header}></View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          padding: 15,
          paddingLeft: 10,
        }}
        ItemSeparatorComponent={<View style={{ marginVertical: 15 }} />}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: item.backgroundColor,
                marginRight: index % 5 == 2 ? 0 : 10,
                marginLeft: index % 5 == 0 ? 0 : 15,
              },
            ]}>
            <View style={{ height: '55%', alignContent: 'center' }}>
              <Text numberOfLines={1} style={styles.productName}>
                {item.name}
              </Text>
              <View style={{ height: 1, backgroundColor: '#fff' }}></View>
              <Text
                numberOfLines={1}
                style={[styles.productDesc, { textAlign: 'center' }]}>
                {item.description}
              </Text>
            </View>
          </View>
        )} />
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({

  card: {
    width: 52,
    flex: 1,
    height: 93,
    // backgroundColor: '#FFFFFF',
    // padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    justifyContent: 'center',
    paddingBottom: 13,
    alignItems: 'center',
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
    marginVertical: 10,
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
  productDesc: {
    marginVertical: 10,
    fontSize: 12,
    fontFamily: Fonts.default,
    fontWeight: '300',
    color: '#ECF9FF',
  },
  priceBox: {
    width: '70%',
    height: 28,
    backgroundColor: '#ECF9FF',
    marginLeft: 'auto',
    borderRadius: 20,
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

var data = [
  {
    name: 'Mon',
    description: '09',

    price: '36',
    backgroundColor: '#4979BC',
  },
  {
    name: 'Tue',
    description: '10',
    price: '36',
    backgroundColor: '#F1BC7E',
  },
  {
    name: 'Wed',
    description: '12',
    price: '36',
    backgroundColor: '#FF8F20',
  },
  {
    name: 'Thu',
    description: '13',
    price: '36',
    backgroundColor: '#C7EEF8',
  },
  {
    name: 'Fri',
    description: '14',
    price: '36',
    backgroundColor: '#E9A6A6',
  },
];
