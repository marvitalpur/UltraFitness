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

const Signup = ({ navigation }) => {
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
        <HeaderComponent navigation={navigation} />
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up</Text>
          <Image
            style={styles.logo}
            source={Assets.logos.blueSmall}
            resizeMode="contain"
          />
        </View>
        <Input
          placeholder="Full Name"
          text={data.fullName}
          setText={setData}
          formKey="fullName"
          textColor={Colors.primary}
          backgroundColor={'#FFFFFF'}

        />
        <View style={{ marginVertical: 10 }} />
        <Input
          placeholder="Contact No"
          text={data.contactNo}
          setText={setData}
          formKey="contactNo"
          textColor={Colors.primary}
          backgroundColor={'#FFFFFF'}
        />
        <View style={{ marginVertical: 10 }} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ marginVertical: 10, width: '45%' }}>
            <Input
              text1="jjhkljhgc"
              text2="text2"
              text3="text3"
              color={Colors.primary}
              color2={Colors.tertiary}
              gender={true}
              text={data.gender}
              setText={setData}
              formKey="gender"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />
          </View>
          <View style={{ marginVertical: 10, width: '45%' }}>
            <Input
              color={Colors.primary}
              color2={Colors.tertiary}
              gender={true}
              text={data.gender}
              setText={setData}
              formKey="gender"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />
          </View>
        </View>

        <Input
          placeholder="Email Address"
          text={data.email}
          setText={setData}
          formKey="email"
          textColor={Colors.primary}
          backgroundColor={'#FFFFFF'}
        />
        <View style={{ marginVertical: 10 }} />
        <Input

          placeholder="Password"
          text={data.password}
          setText={setData}
          formKey="password"
          textColor={Colors.primary}
          backgroundColor={'#FFFFFF'}
        />
        <View style={{ marginVertical: 10 }} />
        <Input
          placeholder="Confirm Password"
          text={data.confirmPassword}
          setText={setData}
          formKey="confirmPassword"
          textColor={Colors.primary}
          backgroundColor={'#FFFFFF'}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setAgree(!agree)}>
          <Icon
            name={agree ? 'check-square' : 'square'}
            size={20}
            color={agree ? Colors.primary : Colors.tertiary}
          />
          <Text style={[styles.text, { marginLeft: 5 }]} numberOfLines={1}>
            I Agree with all{' '}
            <Text style={{ color: Colors.primary }}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ButtonComponent
            borderRadius={50}
            buttonText="Sign Up"
            buttonColor={Colors.primary}
            textColor={Colors.secondary}
            onPress={() => navigation.goBack()}
            height={WIDTH <= 375 ? 40 : 55}
            width={WIDTH <= 375 ? 125 : 175}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const HeaderComponent = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <FAB
        style={[
          styles.btn,
          {
            height: WIDTH < 375 ? 40 : 55,
            width: WIDTH < 375 ? 40 : 55,
          },
        ]}
        size="small"
        icon="arrow-left"
        color={Colors.tertiary}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

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
    paddingTop: 25,
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
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






// <View style={{ marginTop: 25, paddingTop: 25 }}>
// <FlatList
//     data={data1}
//     ItemSeparatorComponent={<View style={{ marginTop: 5 }} />}
//     renderItem={({ item, index }) => {
//         return (
//             <>
//                 <Text style={[styles.headertex, { textAlign: 'left', fontSize: 16 }]}>{item.text2}</Text>
//                 <View style={styles.content}>
//                     <View style={{ flexDirection: 'row', }}>
//                         <View style={{ marginTop: 10 }}>
//                             {item.icon}
//                         </View>
//                         <TextInput placeholder={item.textitem} style={[styles.headertex, {
//                             textAlign: 'left', fontSize: 16, color: '#000'


//                         }]} />
//                     </View>
//                 </View>
//             </>
//         )
//     }}>
// </FlatList >
// <View
//     style={{
//         marginTop: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingBottom: 10
//     }}>
//     <ButtonComponent
//         borderRadius={10}
//         buttonText="Update"
//         buttonColor={Colors.primary}
//         textColor={Colors.secondary}
//         onPress={() => navigation.goBack()}
//         height={WIDTH <= 375 ? 40 : 55}
//         width={WIDTH <= 375 ? 375 : 375}
//     />
// </View>
// </View>