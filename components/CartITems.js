import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {FAB, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CartItems = ({carddata}) => {
  const [count, setCount] = useState(5);
  const [checked, setChecked] = useState();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const navigation = useNavigation();
  const data = [
    {
      description: 'Home Equipment\nPush Up Bars',
      image: Assets.cards.cardImage1,
    },
    {
      description: 'Home Equipment\nPush Up Bars',
      image: Assets.cards.cardImage2,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        contentContainerStyle={{paddingHorizontal: 10}}
        // numColumns={2}
        ItemSeparatorComponent={<View style={{marginVertical: 15}} />}
        renderItem={({item, index}) => (
          <>
            <View style={{flexDirection: 'row', flex: 1, marginVertical: 10}}>
              <View style={{justifyContent: 'center'}}>
                <Checkbox
                  size={12}
                  color="#000"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>

              <View
                style={[
                  styles.card,
                  {
                    // padding: index % 2 == 0 ? 5 : 0,
                    marginRight: index % 2 == 0 ? 5 : 0,
                    marginLeft: index % 2 == 0 ? 0 : 5,
                  },
                ]}>
                <View
                  style={[
                    // styles.headerContainer,
                    {
                      // padding: 5,
                      flexDirection: 'row',
                      // width: WIDTH / 5.5,
                      // height: WIDTH / 4.2,
                      // paddingRight: 10,
                      // backgroundColor: 'blue',
                    },
                  ]}>
                  <View style={styles.productImage}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: WIDTH / 5.6,
                        height: WIDTH / 4.9,
                        marginLeft: 'auto',
                      }}
                    />
                  </View>
                  <View style={{width: WIDTH / 4.6, paddingTop: 15}}>
                    <Text numberOfLines={2} style={styles.productDesc}>
                      {item.description}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.headerContainer,
                      {
                        // backgroundColor: 'green',
                        padding: 15,
                      },
                    ]}>
                    <FAB
                      style={[
                        styles.fab,
                        {
                          backgroundColor: 'red',
                          // opacity: 0.5,
                          backgroundColor: Colors.tertiary,
                          height: WIDTH < 375 ? 44 : 48,
                          width: WIDTH < 375 ? 48 : 51,

                          // width: WIDTH / 7.5,
                          // height: WIDTH / 7.5,
                          // color: '#ffff',
                        },
                      ]}
                      size="small"
                      icon="minus"
                      color="white"
                      onPress={decrement}
                    />
                    <FAB
                      style={[
                        styles.fab,
                        {
                          backgroundColor: 'red',
                          // opacity: 0.5,
                          backgroundColor: Colors.secondary,
                          height: WIDTH < 375 ? 44 : 48,
                          width: WIDTH < 375 ? 48 : 51,

                          // color: '#0000',
                        },
                      ]}
                      // size="small"
                      icon={count}
                      color="black"
                      // onPress={count}
                    />
                    <FAB
                      style={[
                        styles.fab,
                        {
                          backgroundColor: 'red',
                          // opacity: 0.5,
                          backgroundColor: Colors.primary,
                          height: WIDTH < 375 ? 44 : 48,
                          width: WIDTH < 375 ? 48 : 51,

                          color: '#FFFF',
                        },
                      ]}
                      size="small"
                      icon="plus"
                      color="white"
                      onPress={decrement}
                    />
                  </View>
                </View>
              </View>
            </View>
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
    paddingBottom: 10,
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
    height: '55%',
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
    fontSize: 14,
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
    // marginTop: 15,
    // justifyContent: 'space-between',
  },
  fab: {
    height: 48,
    width: 51,
    borderRadius: 5,
    backgroundColor: '#fff',
    // opacity: 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabHeader: {
    height: 50,
    width: 50,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },
});