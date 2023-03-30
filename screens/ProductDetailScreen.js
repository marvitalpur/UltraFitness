import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import CartItems from '../components/CartITems';
import Table from '../components/TableData';
import ButtonComponent from '../components/Button';
import {LocationIcon, Trashicon} from '../assets/svgs/HomeSvgs';
import {EditSvg} from '../assets/svgs/HeaderSvgs';

const ProductDetailScreen = ({navigation}) => {
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
            headertex={'Cart'}
          />
        </View>
        <View style={{marginTop: 25, paddingHorizontal: 5}}>
          <CartItems card3 />
        </View>

        <View
          style={{
            marginTop: 25,
            paddingTop: 25,
            width: '25%',
            alignSelf: 'center',
            borderBottomColor: '#707070 ',
            backgroundColor: '#707070 ',
            opacity: 0.6,
            borderBottomWidth: 2,
            marginHorizontal: 25,
          }}
        />
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <Text style={styles.text}>Summary</Text>
        </View>
        <View style={{paddingHorizontal: 25, paddingTop: 25}}>
          <Table />
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginVertical: 25,
            borderBottomColor: '#707070 ',
            backgroundColor: '#707070 ',
            opacity: 0.6,
            borderBottomWidth: 2,
            marginHorizontal: 25,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <Text style={styles.text}>Total Amount:</Text>
          <Text style={styles.text}>$215.00</Text>
        </View>

        <View
          style={{
            marginTop: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <ButtonComponent
       
            icon1
            SvgICon={<Trashicon/>}
            borderRadius={14}
            buttonText="Proceed to Checkout"
            buttonColor={Colors.primary}
            textColor={Colors.secondary}
            onPress={() => navigation.navigate('OrderTracker')}
            // onPress={() => navigation.navigate('GoogleMapsScreen')}
            height={WIDTH <= 375 ? 55 : 55}
            width={WIDTH <= 323 ? 260 : 300}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

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
