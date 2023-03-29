import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../assets/constants/Colors';
import Header from '../components/Header';
import StepIndicator from 'react-native-step-indicator';
import { WIDTH } from '../assets/constants/Dimensions';



const OrderTracker = ({ navigation }) => {

  const Lables = ['20/18 \n 10:00 AM', '20/18 \n 10:00 AM', '20/18 \n 10:00 AM', '', '', '',]

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Header
            navigation={navigation}
            onlybackbutton
            backIcon
            headertex={'Track Orders'}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Text style={{ marginTop: 40 }}>{Lables}</Text>
            </View>
            <View style={{}}>
              <StepIndicator
                currentPosition={3}
                labelAlign="left" // set labelAlign to left
                labelSize={33}
                direction='vertical'
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
                <Text style={[styles.text, { fontSize: 16 }]}>Order Signed</Text>
                <Text style={[styles.text, { fontSize: 12, opacity: 0.5 }]}>Order Signed</Text>
              </View>

            </View>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView >
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  custom: {
    // stepIndicatorSize: 30,
    // currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#00B4D8',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#00B4D8',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#00B4D8',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#00B4D8',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#00B4D8',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#00B4D8'
  },
  textView: {
    position: 'absolute',
    top:
      WIDTH < 390 && WIDTH > 375 ? 35 : WIDTH < 375 ? 40 : 40,
    right:
      WIDTH < 390 && WIDTH > 375 ? 50 : WIDTH < 375 ? 50 : -10
  },
  text: {
    color: '#000',
    fontWeight: '500'

  },

});
