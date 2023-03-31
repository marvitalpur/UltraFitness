import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';

import {Fonts} from '../assets/constants/Fonts';
import CartItems from '../components/CartITems';
import Icon from 'react-native-vector-icons/Feather';
import Assets from '../assets';
const MyOrders = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: 15}}>
          <Header
            navigation={navigation}
            onlybackbutton
            backIcon
            headertex={'Track Orders'}
          />
        </View>
        <View style={{padding: 25, flexDirection: 'row'}}>
          <Text>
            Sept 23, 210
            <Icon
              name="chevron-down"
              size={20}
              color={Colors.primary}
              // color={value.length < 1 ? color1 : color2}
              style={{marginLeft: 5}}
            />
          </Text>
        </View>

        <CartItems
          card2
          products={Assets.cards.cardImage1}
          price={'₹37.00'}
          ordernumber={'OD - 424923192 - N'}
          onPress={() =>
            navigation.navigate('ProductDetailScreen', {
              status: 'Deleved',
              price: '₹12.00',
              products: Assets.cards.cardImage1,
              ordernumber: 'OD - 424923192 - N',
            })
          }
        />
        <View
          style={{
            width: '25%',
            alignSelf: 'center',
            marginTop: 25,
            borderBottomColor: '#707070 ',
            backgroundColor: '#707070 ',
            opacity: 0.6,
            borderBottomWidth: 2,
            marginHorizontal: 25,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
// const HeaderComponent = ({navigation, ordernumber}) => {
//   return (
//     <View style={{}}>
//       <TouchableRipple
//         onPress={() => navigation.goBack()}
//         style={{
//           width: 50,
//           height: 50,
//           backgroundColor: '#fff',
//           justifyContent: 'center',
//           alignItems: 'center',
//           borderRadius: 10,
//           elevation: 15,
//         }}>
//         <BackSvg />
//       </TouchableRipple>
//       <Text style={styles.headertex}>{ordernumber}</Text>
//     </View>
//   );
// };
export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  text: {
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  boldtext: {
    textAlign: 'center',
    padding: 5,
  },
  headertex: {
    fontSize: 22,
    color: Colors.tertiary,
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 22,
    color: Colors.tertiary,
    textAlign: 'center',
    // letterSpacing: 0.9,
  },
});
