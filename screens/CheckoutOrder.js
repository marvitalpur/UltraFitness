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
import Lottie from 'lottie-react-native';
import {Fonts} from '../assets/constants/Fonts';
import Icon from 'react-native-vector-icons/Feather';
import Assets from '../assets';

const CheckoutOrder = ({navigation}) => {
  const [checked, setChecked] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25,
            // backgroundColor: 'green',
          }}>
          <View style={{marginTop: 25}} />
          <Text
            style={[
              styles.text,
              {
                fontWeight: '300',
                fontFamily: Fonts.default,
                fontSize: 22,
              },
            ]}>
            Checkout
          </Text>
          <View style={{marginTop: 15}} />
          <View
            style={
              {
                //   width: WIDTH / 2.5,
                //   alignItems: 'center',
                //   marginTop: 20,
              }
            }>
            <Lottie
              source={Assets.animation.animationRides}
              style={{width: WIDTH, height: HEIGHT / 2.5}}
              autoPlay
              loop
            />
          </View>

          <View style={{}} />
          <Text style={[styles.heading2]}>Complete Successfully</Text>
          <Text numberOfLines={4} style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
            pretium tempor.
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.text2, {color: Colors.tertiary}]}>
            example_mail@.com
          </Text>

          <View style={{marginTop: 15}} />
          <View
            style={{
              marginTop: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <ButtonComponent
              borderRadius={14}
              buttonText="Go to Dashboard"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              onPress={() => navigation.navigate('Drawer', {screen: 'Home'})}
              height={WIDTH <= 375 ? 55 : 55}
              width={WIDTH <= 323 ? 260 : 300}
            />
          </View>
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
export default CheckoutOrder;
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
  text2: {
    paddingTop: 10,
    lineHeight: 20,
    fontFamily: Fonts.default,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.cards.GreyText,
  },
  heading2: {
    fontWeight: '400',
    fontFamily: Fonts.default,
    fontSize: 18,
    color: Colors.tertiary,
  },
});
