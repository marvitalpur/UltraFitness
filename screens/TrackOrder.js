import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import StepIndicator from 'react-native-step-indicator';
import {WIDTH} from '../assets/constants/Dimensions';

const OrderTracker = ({navigation}) => {
  // const Lables = [
  //   '20/18 \n 10:00 AM',
  //   '20/18 \n 10:00 AM',
  //   '20/18 \n 10:00 AM',
  //   '',
  //   '',
  //   '',
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
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
        <View
          style={{
            height: '75%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            // backgroundColor: 'red',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{paddingHorizontal: 35}}>
              <Text style={[styles.textViewsmall]}>20/18 {'\n'} 10:00 AM</Text>
              <Text style={[styles.textView1small]}>20/18 {'\n'} 10:00 AM</Text>
              <Text style={[styles.textView2small]}>20/18 {'\n'} 10:00 AM</Text>
            </View>
            <View style={{marginLeft: 15}}>
              <StepIndicator
                currentPosition={3}
                labelAlign="left" // set labelAlign to left
                labelSize={22}
                direction="vertical"
                customStyles={{
                  ...styles.custom,
                  // add style for left-aligned labels
                  stepLabel: {
                    alignSelf: 'flex-end',
                  },
                }}
                labelColor="#00"
              />
            </View>
            <View>
              <View style={styles.textView}>
                <Text style={[styles.text, {fontSize: 16}]}>Order Signed</Text>
                <Text style={[styles.text, {fontSize: 12, opacity: 0.5}]}>
                  Lagos State, Nigeria
                </Text>
              </View>
              <View style={styles.textView1}>
                <Text style={[styles.text, {fontSize: 16}]}>
                  Order Processed
                </Text>
                <Text style={[styles.text, {fontSize: 12, opacity: 0.5}]}>
                  Lagos State, Nigeria
                </Text>
              </View>
              <View style={styles.textView2}>
                <Text style={[styles.text, {fontSize: 16}]}>Shipped</Text>
                <Text style={[styles.text, {fontSize: 12, opacity: 0.5}]}>
                  Lagos State, Nigeria
                </Text>
              </View>
              <View style={styles.textView3}>
                <Text style={[styles.text, {fontSize: 16}]}>
                  Out for delivery
                </Text>
                <Text style={[styles.text, {fontSize: 12, opacity: 0.5}]}>
                  Lagos State, Nigeria
                </Text>
              </View>
              <View style={styles.textView4}>
                <Text style={[styles.text, {fontSize: 16}]}>Delivered</Text>
                <Text style={[styles.text, {fontSize: 12, opacity: 0.5}]}>
                  Lagos State, Nigeria
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OrderTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    // paddingHorizontal: 25,
  },
  headerContainer: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // paddingTop: 10,
  },
  custom: {
    // stepIndicatorSize: 30,
    // currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#00B4D8',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#00B4D8',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#00B4D8',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#00B4D8',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 12,
    stepIndicatorLabelCurrentColor: '#00B4D8',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: '#00B4D8',
  },

  textViewsmall: {
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 40 : 45,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -5 : -5,
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
  textView1small: {
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 300 : WIDTH < 375 ? 155 : 155,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -5 : -5,
  },
  textView2small: {
    fontSize: 10,
    textAlign: 'center',
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 255 : 265,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -5 : -5,
  },
  textView: {
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 40 : 45,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -120 : -120,
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
  textView1: {
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 150 : 150,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -120 : -120,
  },
  textView2: {
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 255 : 260,
    right: WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? -120 : -120,
  },
  textView3: {
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 370 : WIDTH < 375 ? 370 : 375,
    right: WIDTH < 390 && WIDTH > 375 ? -160 : WIDTH < 375 ? -120 : -120,
  },
  textView4: {
    position: 'absolute',
    top: WIDTH < 390 && WIDTH > 375 ? 480 : WIDTH < 375 ? 480 : 490,
    right: WIDTH < 390 && WIDTH > 375 ? -160 : WIDTH < 375 ? -120 : -120,
  },
});
