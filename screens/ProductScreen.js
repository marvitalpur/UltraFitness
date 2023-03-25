import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Fonts } from '../assets/constants/Fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RatingsItems from '../components/RatingsItems';
import ButtonComponent2 from '../components/Botton2';
import { FAB, TouchableRipple } from 'react-native-paper';
import { BackSvg } from '../assets/svgs/HeaderSvgs';
import Mymodal from '../components/Popup';

const ProductScreen = ({ navigation, route, index }) => {
  const { ProductImaig1 } = route.params;

  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const data = [
    { imageitem: ProductImaig1 },
    { imageitem: ProductImaig1 },
    { imageitem: ProductImaig1 },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              paddingTop: 25,
              padding: 15,
              // paddingHorizontal: 15,
              width: '100%',
              height: '100%',
              // marginTop: 15,
            }}>
            <HeaderComponent navigation={navigation} />
            <View
              style={{
                flex: 1,
                //   backgroundColor: 'green',
              }}>
              <View style={{ alignSelf: 'center', padding: 25 }}>
                <Image
                  source={ProductImaig1}
                  resizeMode="contain"
                  style={{
                    height: WIDTH <= 375 ? 180 : 276,
                    width: WIDTH <= 323 ? 180 : 276,
                    marginRight: index % 5 == 2 ? 0 : 0,
                    marginLeft: index % 5 == 0 ? 0 : 0,
                  }}
                />
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                data={data}
                renderItem={({ item, index }) => {
                  return (
                    <>
                      <View
                        style={{
                          height: WIDTH <= 375 ? 40 : 76,
                          width: WIDTH <= 323 ? 233 : 76,
                          marginRight: index % 5 == 2 ? 0 : 3,
                          marginLeft: index % 5 == 0 ? 0 : 3,
                        }}>
                        <Image
                          source={item.imageitem}
                          resizeMode="contain"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
            <View style={{}}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={[styles.CenterText, { color: '#00B4D8' }]}>
                    Home Equipment {'\n'}Push Up Bars
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={[
                      // styles.PriceText,
                      {
                        fontSize: 42,
                        color: '#000',
                        fontFamily: Fonts.default,
                        // marginRight: 5,
                      },
                    ]}>
                    120<Text style={{ fontSize: 20 }}>$</Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={[styles.CenterText, { color: '#000', fontSize: 16 }]}>
                  Reviews :
                </Text>
                <View style={{ marginTop: 3 }}>
                  <RatingsItems />
                </View>
              </View>
              <Text
                style={[styles.CenterText, { color: '#000', fontSize: 16 }]}
                numberOfLines={1}>
                Description :
              </Text>
              <Text
                style={[
                  styles.subTitle,
                  {
                    color: '#000',
                    fontSize: 12,
                    fontWeight: '205',
                    opacity: 0.5,
                    paddingTop: 4,
                  },
                ]}
                numberOfLines={2}>
                Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam
                nonumy eirmod tempor
              </Text>
              <Text
                style={[
                  styles.CenterText,
                  {
                    color: '#000',
                    fontSize: 16,
                    paddingVertical: 10,
                    paddingTop: 15,
                  },
                ]}
                numberOfLines={2}>
                Quantity:
              </Text>
            </View>
            <View
              style={{
                // flex: 1,
                paddingVertical: 15,
                alignItems: 'flex-start',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // // flex: 1,
                  // justifyContent: 'space-between',
                }}>
                <View
                  style={[
                    styles.headerContainer,
                    {
                      // paddingRight: 10,
                      // backgroundColor: 'blue',
                    },
                  ]}>
                  <FAB
                    style={[
                      styles.fab,
                      {
                        backgroundColor: 'red',
                        opacity: 0.5,
                        backgroundColor: '#7E7C7B30',
                        height: WIDTH < 375 ? 55 : 55,
                        width: WIDTH < 375 ? 55 : 55,
                        // color: '#0000',
                      },
                    ]}
                    size="small"
                    icon="minus"
                    color="black"
                    onPress={decrement}
                  />
                </View>
                <View
                  style={[
                    styles.headerContainer,
                    {
                      paddingLeft: 15,
                      // backgroundColor: 'green',
                      justifyContent: 'space-around',
                    },
                  ]}>
                  <FAB
                    style={[
                      styles.fab,
                      {
                        backgroundColor: Colors.primary,
                        height: WIDTH < 375 ? 55 : 55,
                        // width: WIDTH < 375 ? 55 : 55,
                      },
                    ]}
                    size="small"
                    icon="plus"
                    color={'#fff'}
                    onPress={increment}
                  />
                </View>
              </View>

              <View style={{ flex: 1, paddingLeft: 5 }}>
                <ButtonComponent2
                  buttonText={count}
                  buttonColor={'#7E7C7B30'}
                  textColor={'#444546'}
                  onPress={() => navigation.navigate('Drawer')}
                  width={WIDTH <= 375 ? 198 : 198}
                  height={WIDTH <= 375 ? 55 : 68}
                />
              </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <ButtonComponent2
                  icon={'shoppingcart'}
                  buttonText="Add to cart"
                  buttonColor={'#000'}
                  textColor={'#fff'}
                  onPress={() => setModalVisible(true)}
                  height={WIDTH <= 375 ? 55 : 68}
                  width={WIDTH <= 375 ? 160 : 164}
                />
                <View style={{ flex: 1, paddingLeft: 5 }}>
                  <ButtonComponent2
                    icon={'shoppingcart'}
                    buttonText="Buy Now"
                    buttonColor={Colors.primary}
                    textColor={'#fff'}
                    onPress={() => navigation.navigate('Drawer')}
                    // onPress={() => navigation.navigate('Drawer')}
                    height={WIDTH <= 375 ? 55 : 68}
                    width={WIDTH <= 375 ? 160 : 164}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Mymodal
        modalVisible={modalVisible}
        setModalVisible={modalVisible}
        onPress={() => setModalVisible(false)}
        modaltext1="Added To cart"
        button1={'Close'}
        button2=" Cart "
        cartbtn={() => {
          navigation.navigate('CartScreen');
        }}
      />
    </>
  );
};

const HeaderComponent = ({ navigation }) => {
  return (
    <View style={{}}>
      <TouchableRipple
        onPress={() => navigation.goBack()}
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          elevation: 15,
        }}>
        <BackSvg />
      </TouchableRipple>
    </View>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },

  ProductText: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CenterText: {
    fontSize: 20,
    // height: '45%',
    fontWeight: 'bold',
    fontFamily: Fonts.default,
    color: Colors.tertiary,
    lineHeight: 22,
    // paddingVertical: 5,
    // marginTop: 5,
  },
  PriceText: {
    fontSize: 42,
    // height: '55%',
    fontWeight: 'bold',
    fontFamily: Fonts.default,
    color: Colors.tertiary,
    lineHeight: 22,
  },
  list: {
    height: '50%',
  },
  subTitle: {
    fontFamily: Fonts.default,
    fontSize: 16,
    fontWeight: 200,
    color: Colors.secondary,
    marginTop: 0,
    // marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fab: {
    height: 55,
    width: 55,
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
  btn: {
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
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 5,
  },
});
