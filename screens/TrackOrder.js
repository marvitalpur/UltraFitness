import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../assets/constants/Colors';
import { FAB } from 'react-native-paper';
import { WIDTH } from '../assets/constants/Dimensions';
import Assets from '../assets';
import { Fonts } from '../assets/constants/Fonts';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/Button';
import Header from '../components/Header';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const OrderTracker = ({ navigation }) => {
  const [data, setData] = useState({
    fullName: '',
    contactNo: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agree, setAgree] = useState(false);
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
        <View style={{ flex: 1 }}>
          <ProgressSteps progressBarColor={'#ebebe4'}>
            <ProgressStep label="First Step">
              <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 1!</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Second Step">
              <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Third Step">
              <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
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
  fab: {
    height: 55,
    width: 55,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 180, 216, 0.06)',
    // opacity: 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: WIDTH <= 375 ? 25 : 30,
    fontFamily: Fonts.default,
    fontWeight: '700',
    marginRight: 2.5,
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  logo: {
    width: WIDTH <= 375 ? 45 : 50,
    height: WIDTH <= 375 ? 45 : 50,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
});
