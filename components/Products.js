import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Products = ({}) => {
  const navigation = useNavigation();
  const data = [
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage1,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage1,
          ItemImaig1: Assets.cards.cardImage1,
        }),
    },
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage2,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage2,
          ItemImaig1: Assets.cards.cardImage2,
        }),
    },
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage3,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage3,
          ItemImaig1: Assets.cards.cardImage3,
        }),
    },
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage4,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage4,
          ItemImaig1: Assets.cards.cardImage4,
        }),
    },
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage5,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage5,
          ItemImaig1: Assets.cards.cardImage5,
        }),
    },
    {
      name: 'product 1',
      price: '36',
      description: 'Home Equipment',
      image: Assets.cards.cardImage6,
      onPress: () =>
        navigation.navigate('ProductSCreen', {
          ProductImaig1: Assets.cards.cardImage6,
          ItemImaig1: Assets.cards.cardImage6,
        }),
    },
  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, {width: '50%'}]}>
          Get Something Special For You!
        </Text>
        <TouchableRipple>
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
        </TouchableRipple>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          padding: 25,
        }}
        numColumns={2}
        ItemSeparatorComponent={<View style={{marginVertical: 15}} />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={item.onPress}
            activeOpacity={0.75}
            style={{justifyContent: 'space-evenly', width: '50%'}}>
            <ProductCard
              index={index}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
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
    fontFamily: Fonts.default,
    color: Colors.tertiary,
    lineHeight: 18,
  },
  list: {
    height: '50%',
  },
});
