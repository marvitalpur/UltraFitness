import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Fonts } from '../assets/constants/Fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RatingsItems from '../components/RatingsItems';
import ButtonComponent from '../components/Button';
import ButtonComponent2 from '../components/Botton2';
import { FAB } from 'react-native-paper';


const ProductScreen = ({ navigation, index }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: 15, width: '100%', height: '100%' }}>
          <HeaderComponent navigation={navigation} />
          <View
            style={{
              flex: 1,
              //   backgroundColor: 'green',
            }}>
            <View style={{ alignSelf: 'center', paddingVertical: 15 }}>
              <Image
                source={Assets.cards.cardImage1}
              // style={{width: 76, height: 76, padding: 4}}
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
          <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <View style={styles.ProductText}>
              <Text
                style={[styles.CenterText, { width: '70%', color: '#00B4D8' }]}>
                Home Equipment Push Up Bars
              </Text>

              <Text
                style={[
                  styles.PriceText,
                  {
                    color: '#000',
                    fontFamily: Fonts.default,
                    marginRight: 5,
                  },
                ]}>
                120s
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.CenterText, { color: '#000', fontSize: 16 }]}>
                Reviews :
              </Text>
              <View style={{ marginTop: 7 }}>
                <RatingsItems />
              </View>
            </View>
            <Text
              style={[
                styles.CenterText,
                { color: '#000', fontSize: 16, marginTop: 5 },
              ]}
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
                },
              ]}
              numberOfLines={2}>
              Lorem ipsum dolor sit amet, consetetur sscing elitr, sed diam
              nonumy eirmod tempor
            </Text>
            <Text
              style={[styles.CenterText, { color: '#000', fontSize: 16 }]}
              numberOfLines={2}>
              Quantity:
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>

            <View style={{ flexDirection: 'row', }}>
              <View style={[styles.headerContainer, {
                paddingRight: 10


              }]}>
                <FAB
                  style={[
                    styles.fab,
                    {

                      height: WIDTH < 375 ? 40 : 55,
                      width: WIDTH < 375 ? 40 : 55,
                    },
                  ]}
                  size="small"
                  icon="minus"
                  color={Colors.tertiary}
                  onPress={decrement}
                />


              </View>
              <View style={[styles.headerContainer, {
                justifyContent: 'space-around'

              }]}>

                <FAB
                  style={[
                    styles.fab,
                    {
                      height: WIDTH < 375 ? 40 : 55,
                      width: WIDTH < 375 ? 40 : 55,
                    },
                  ]}
                  size="small"
                  icon="plus"
                  color={Colors.tertiary}
                  onPress={increment}
                />

              </View>
            </View>
            <View style={[styles.headerContainer, {
              justifyContent: 'space-around'

            }]}>


            </View>

            <View style={[styles.headerContainer, {
              borderRadius: 10, justifyContent: 'center',
              alignItems: 'center',
              height: WIDTH < 375 ? 40 : 55,
              width: WIDTH < 375 ? 125 : 189, backgroundColor: '#A1A1A1'
            }]}
            >
              <Text>{count}</Text>
            </View>



          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>

            <ButtonComponent2
              icon={'arrowleft'}
              buttonText="Back"
              buttonColor={'#000'}
              textColor={'#fff'}
              onPress={() => navigation.navigate('Drawer')}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 375 ? 125 : 121}
            />
            <ButtonComponent2
              icon={'shoppingcart'}
              buttonText="Add to cart"
              buttonColor={Colors.primary}
              textColor={'#fff'}
              onPress={() => navigation.navigate('Drawer')}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 375 ? 125 : 189}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const HeaderComponent = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <FAB
        style={[
          styles.fab,
          {
            height: WIDTH < 375 ? 40 : 55,
            width: WIDTH < 375 ? 40 : 55,
          },
        ]}
        size="small"
        icon="arrow-left"
        color={Colors.tertiary}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  ProductText: {
    marginTop: WIDTH < 375 ? 25 : 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CenterText: {
    fontSize: 20,
    // height: '55%',
    fontWeight: 'bold',
    fontFamily: Fonts.default,
    color: Colors.tertiary,
    lineHeight: 22,
    marginTop: 5,
  },
  PriceText: {
    fontSize: 22,
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
    paddingTop: 10,
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
});

const data = [
  { imageitem: Assets.cards.cardImage1 },
  { imageitem: Assets.cards.cardImage1 },
  { imageitem: Assets.cards.cardImage1 },
];

