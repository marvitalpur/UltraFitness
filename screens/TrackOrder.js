import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../assets/constants/Colors';

import Header from '../components/Header';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import StepIndicator from 'react-native-step-indicator';
import MyStepIndicator from '../components/steps';


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
        <View style={{ flex: 1, marginTop: 25, }}>
          <StepIndicator
            currentPosition={3}
            labelSize={22}
            labelColor='#000'
            direction='vertical'
            customStyles={styles.custom}
            labels={Lables} />

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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  custom: {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#00B4D8',
    stepStrokeWidth: 4,
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
  }

});
