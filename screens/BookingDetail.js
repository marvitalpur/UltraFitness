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
import DropDown from 'react-native-paper-dropdown';

const BookingDetail = ({ navigation }) => {
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
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 25 }}>
        <Header
          headercompo1
          navigation={navigation}
          headertex="Booking details"
        />
        <View style={{ marginTop: 25, flex: 1 }}>
          <Input
            placeholder="Full Name"
            text={data.fullName}
            setText={setData}
            formKey="fullName"
          />

          <View style={{ marginVertical: 10 }} />
          <Input
            placeholder="Email Address"
            text={data.password}
            setText={setData}
            formKey="Email"
            textColor={Colors.tertiary}
          />
          <View style={{ marginVertical: 10 }} />
          <Input
            placeholder="Start Date"
            text={data.confirmPassword}
            setText={setData}
            formKey="Start Date"
            iconname="Calendar"
            textColor={Colors.tertiary}
          />
          <View style={{ marginVertical: 10 }} />
          <Input
            placeholder="End Date"
            text={data.confirmPassword}
            setText={setData}
            formKey="End Date"
            iconname="Calendar"
            textColor={Colors.tertiary}
          />
          <View style={{ marginVertical: 10 }} />
          <Input
            placeholder="Time Slot"
            text={data.confirmPassword}
            setText={setData}
            formKey="End Date"
            iconname="Calendar"
            textColor={Colors.tertiary}
          />
          <View style={{ marginVertical: 10 }} />
          <Input
            placeholder="Exercise Type"
            text={data.confirmPassword}
            setText={setData}
            formKey="End Date"
            iconname="down"
            textColor={Colors.tertiary}
          />
          <DropDown />

          <View
            style={{
              marginTop: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ButtonComponent
              borderRadius={10}
              buttonText="BBok now"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              onPress={() => navigation.navigate('GoogleMapsScreen')}
              height={WIDTH <= 375 ? 55 : 55}
              width={WIDTH <= 375 ? 300 : 335}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BookingDetail;

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
