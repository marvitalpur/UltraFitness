import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import {WIDTH} from '../assets/constants/Dimensions';

var data = [
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage1,
  },
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage2,
  },
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage3,
  },
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage4,
  },
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage5,
  },
  {
    name: 'product 1',
    price: '36',
    description: 'jkskbycsdubfg',
    image: Assets.cards.cardImage6,
  },
];

const Products = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Get Something Special For You!</Text>
        <Text
          style={
            (styles.headerText,
            {
              color: '#3EB1D5',
              fontFamily: Fonts.default,
            })
          }>
          See all
        </Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          padding: 25,
          // justifyContent: 'space-around',
          // alignItems: 'center',
        }}
        numColumns={2}
        ItemSeparatorComponent={<View style={{marginVertical: 15}} />}
        renderItem={({item, index}) => (
          <ProductCard
            index={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        )}></FlatList>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 25,
    marginTop: WIDTH < 375 ? 25 : 50,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    // marginTop: 6,
    fontFamily: Fonts.default,
  },
  list: {
    height: '50%',
  },
});
