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
import {Image} from 'react-native';

const CartItems = ({carddata}) => {
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
  ];

  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{
          padding: 25,
        }}
        // numColumns={1}
        ItemSeparatorComponent={<View style={{marginVertical: 15}} />}
        renderItem={({item, index}) => (
          <>
            <TouchableOpacity
              onPress={item.onPress}
              activeOpacity={0.75}
              style={{justifyContent: 'space-evenly'}}>
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
                    source={item.image}
                    resizeMode="contain"
                    style={{
                      width: WIDTH / 4.5,
                      height: WIDTH / 4.5,
                      marginLeft: 'auto',
                    }}
                  />
                </View>
                <View style={{height: '55%'}}>
                  <Text numberOfLines={1} style={styles.productDesc}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default CartItems;

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
  card: {
    flex: 1,
    height: 81,
    backgroundColor: '#FFFFFF',
    // padding: 10,
    borderRadius: 10,
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
    height: '35%',
  },
  productName: {
    // width: '70%',
    // fontFamily: Fonts.default,
    // fontWeight: '600',
    // letterSpacing: 0.9,
    // textTransform: 'capitalize',
    // color: '#AAAAAA',
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
  databox: {
    flex: 1,
    height: 81,
    backgroundColor: '#FFFFFF',
    // padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
