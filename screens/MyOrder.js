import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import Header from '../components/Header';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import { Fonts } from '../assets/constants/Fonts';
import ProductCard from '../components/ProductCard';
import Products from '../components/Products';
import CartItems from '../components/CartITems';
import TableData from '../components/TableData';
import Table from '../components/TableData';
import ButtonComponent from '../components/Button';
import { TouchableRipple } from 'react-native-paper';
import { BackSvg } from '../assets/svgs/HeaderSvgs';
import Icon from 'react-native-vector-icons/Feather';
const MyOrders = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            paddingTop: 25,
            padding: 15,
          }}>
          <HeaderComponent navigation={navigation} />
        </View>
        <View style={{ padding: 25, flexDirection: 'row' }}>
          <Text>Sept 23, 210
            <Icon
              name="chevron-down"
              size={20}
              color={Colors.primary}
              // color={value.length < 1 ? color1 : color2}
              style={{ marginLeft: 5 }}
            />
          </Text>
        </View>
        <CartItems card2 onPress={() =>
          navigation.navigate('ProductDetailScreen')
        } />
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
});
