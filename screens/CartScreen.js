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

const CartScreen = ({navigation}) => {
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
          <CartItems card1 />
        </View>
        <View style={{marginTop: 25}}>
          <View style={styles.line} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}>
            <Text style={styles.text}>Summary</Text>
          </View>
          <View style={{paddingHorizontal: 25, paddingTop: 25}}>
            <Table />
          </View>
          <View style={[styles.line, {width: '80%'}]} />
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
              borderRadius={14}
              buttonText="Proceed to Checkout"
              buttonColor={Colors.tertiary}
              textColor={Colors.secondary}
              onPress={() => navigation.navigate('GoogleMapsScreen')}
              // onPress={() => navigation.navigate('GoogleMapsScreen')}
              height={WIDTH <= 375 ? 55 : 55}
              width={WIDTH <= 323 ? 260 : 300}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

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
  line: {
    width: '25%',
    alignSelf: 'center',
    borderBottomColor: '#000',
    backgroundColor: '#707070 ',
    opacity: 0.15,
    borderBottomWidth: 2,
    marginVertical: 15,
  },
});
