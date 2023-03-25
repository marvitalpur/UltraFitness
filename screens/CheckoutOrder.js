import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../assets/constants/Colors';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import ButtonComponent from '../components/Button';
import { TouchableRipple } from 'react-native-paper';
import { BackSvg } from '../assets/svgs/HeaderSvgs';
import Lottie from 'lottie-react-native';
import { Fonts } from '../assets/constants/Fonts';
import { RiderIcon1, RiderIcon2, RiderIcon3 } from '../assets/svgs/HomeSvgs';
import Assets from '../assets';

const CheckoutOrder = ({ navigation }) => {
  const [checked, setChecked] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 25,
            // backgroundColor: 'green',
          }}>

          <View>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: '300',
                  fontFamily: Fonts.default,
                  fontSize: 22,
                  marginTop: 25,
                },
              ]}>
              Checkout
            </Text>
          </View>

          <View style={{}}>
            <Lottie
              source={Assets.animation.animationRides}
              style={{
                width: WIDTH < 375 ? 230 : 230,

                // height: WIDTH < 375 ? 250 : 250,
              }}
              autoPlay
              loop
            />
          </View>
          <Text style={[styles.heading2]}>Complete Successfully</Text>
          <Text numberOfLines={4} style={styles.text2}>
            Your ordering information will be {'\n'}forwarded to your email
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.text2, { color: Colors.tertiary, marginTop: 10 }]}>
            example_mail@.com
          </Text>

          <View style={{ marginTop: 15 }} />
          <RiderIcon1 />
          <Text numberOfLines={4} style={styles.text2}>
            We will inform you when the {'\n'}package is ready
          </Text>
          <View style={{ marginTop: 15 }} />
          <RiderIcon2 />
          <View style={{ marginTop: 15 }} />
          <Text numberOfLines={4} style={styles.text2}>
            Your products will be shipped in{'\n'} 2-3 days
          </Text>
          <View style={{ marginTop: 15 }} />
          <RiderIcon3 />
          <View style={{ marginTop: 15 }} />
          <Text numberOfLines={4} style={styles.text2}>
            You will receive an email when the{'\n'}package is delivered
          </Text>

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
              onPress={() => navigation.navigate('MyOrders')}
              height={WIDTH <= 375 ? 55 : 55}
              width={WIDTH <= 323 ? 260 : 300}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
const HeaderComponent = ({ navigation }) => {
  return (
    <View style={{}}>
      <TouchableRipple
        onPress={() => navigation.navigate('CheckoutOrder')}
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
    // paddingTop: 10,
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
    textAlign: 'center',
  },
});
