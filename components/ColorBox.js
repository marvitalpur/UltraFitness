import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const ColorBox = props => {
  return (
    <View>
      <View style={styles.header}>
        {/* <Text style={[styles.headerText, {width: '50%'}]}>
          Get Something Special For You!
        </Text> */}
        {/* <TouchableRipple>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={
                (styles.headerText,
                {
                  color: '#3EB1D5',
                  fontFamily: Fonts.default,
                  marginRight: 5,
                })
              }>
              See all
            </Text>
            <Icon name={'arrow-right'} size={18} color={Colors.primary} />
          </View>
        </TouchableRipple> */}
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          padding: 15,
          paddingLeft: 10,
        }}
        ItemSeparatorComponent={<View style={{marginVertical: 15}} />}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: item.backgroundColor,
                marginRight: index % 5 == 2 ? 15 : 10,
                marginLeft: index % 5 == 0 ? 10 : 15,
              },
            ]}>
            <View style={{height: '55%', alignContent: 'center'}}>
              <Text numberOfLines={1} style={styles.productName}>
                {item.name}
              </Text>
              <View style={{height: 1, backgroundColor: '#fff'}}></View>
              <Text
                numberOfLines={1}
                style={[styles.productDesc, {textAlign: 'center'}]}>
                {item.description}
              </Text>
            </View>
          </View>
        )}></FlatList>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  header: {
    // paddingHorizontal: 25,
    // marginTop: WIDTH < 375 ? 25 : 50,
    // marginBottom: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  headerText: {
    // marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: Fonts.default,
    color: Colors.tertiary,
    lineHeight: 18,
  },
  list: {
    height: '50%',
  },
  card: {
    width: 52,
    flex: 1,
    height: 93,
    // backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    justifyContent: 'center',
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
    marginVertical: 8,
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
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
