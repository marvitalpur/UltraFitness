import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import Table from '../components/TableData';
import ButtonComponent from '../components/Button';
import {TouchableRipple} from 'react-native-paper';
import {BackSvg} from '../assets/svgs/HeaderSvgs';
import Radiobutton from '../components/Radiobutton';
import {Fonts} from '../assets/constants/Fonts';
import Icon from 'react-native-vector-icons/Feather';

const CheckoutCart = ({navigation}) => {
  const [checked, setChecked] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingTop: 25,
            padding: 15,
          }}>
          <HeaderComponent navigation={navigation} />
        </View>
        <View
          style={{
            marginTop: 25,
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <Text
            style={[
              styles.text,
              {
                fontWeight: 'bold',
                fontFamily: Fonts.default,
                fontSize: 24,
              },
            ]}>
            Checkout
          </Text>
          <Text
            numberOfLines={2}
            style={[
              //   styles.text,
              {
                // fontWeight: 'bold',
                paddingTop: 10,
                lineHeight: 20,
                fontFamily: Fonts.default,
                fontSize: 14,
                color: Colors.cards.GreyText,
              },
            ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
            pretium tempor.
          </Text>
          <View style={{marginTop: 15}} />
          <Text
            style={[
              styles.text,
              {
                fontWeight: 'bold',
                fontFamily: Fonts.default,
                fontSize: 15,
              },
            ]}>
            Delivery Address
          </Text>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Radiobutton
              checked={checked}
              setChecked={setChecked}
              onPress={() => setChecked(!checked)}
            />
            <View style={{flex: 1}}>
              <Text style={[styles.nametext]}>Annie Smith</Text>
              <Text numberOfLines={2} style={[styles.nametext]}>
                example_mail@.com
              </Text>
              <Text numberOfLines={2} style={[styles.nametext]}>
                1 Chapel Hill Heswall{'\n'}BOURNEMOUTH BH1 1AA
              </Text>
            </View>
            <View style={{}}>
              <Text
                numberOfLines={2}
                style={[
                  styles.nametext,

                  {color: Colors.cards.GreyText, fontSize: 14},
                ]}>
                edit
                <Icon name="edit" size={14} style={{paddingLeft: 5}} />
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.text,
              {
                // marginTop: 10,
                fontWeight: 'bold',
                fontFamily: Fonts.default,
                fontSize: 15,
                marginVertical: 5,
              },
            ]}>
            Payment Method
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="check-square"
              size={14}
              style={{paddingTop: 11, paddingRight: 5}}
            />
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                style={[styles.nametext, {color: '#000'}]}>
                use this card
              </Text>
            </View>
            <View style={{}}>
              <Text
                numberOfLines={2}
                style={[styles.nametext, {color: '#000'}]}>
                Add new
                <Icon name="plus" size={14} style={{paddingLeft: 5}} />
              </Text>
            </View>
          </View>
          <Text numberOfLines={2} style={[styles.nametext]}>
            42201-336-2102-5214
          </Text>
        </View>
        <View style={styles.boderline} />
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
            marginVertical: 5,
          }}>
          <Text style={styles.text}>Total Amount:</Text>
          <Text style={styles.text}>$215.00</Text>
        </View>
        <View
          style={{
            width: '70%',
            alignSelf: 'center',
            // marginTop: 25,
            borderBottomColor: '#707070 ',
            backgroundColor: '#707070 ',
            opacity: 0.6,
            borderBottomWidth: 1,
            marginHorizontal: 25,
          }}
        />
        <View
          style={{
            marginTop: 15,
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
            height={WIDTH <= 375 ? 55 : 55}
            width={WIDTH <= 323 ? 260 : 300}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const HeaderComponent = ({navigation}) => {
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
export default CheckoutCart;
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
  nametext: {
    paddingTop: 8,
    lineHeight: 20,
    fontFamily: Fonts.default,
    fontSize: 14,
    color: Colors.cards.tertiarys,
  },
  boderline: {
    width: '25%',
    alignSelf: 'center',
    paddingVertical: 10,
    // marginTop: 25,
    borderBottomColor: '#707070 ',
    backgroundColor: '#707070 ',
    opacity: 0.25,
    borderBottomWidth: 2,
    marginHorizontal: 25,
  },
});
