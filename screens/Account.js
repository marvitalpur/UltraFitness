import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, FAB} from 'react-native-paper';
import {Fonts} from '../assets/constants/Fonts';
import Assets from '../assets';
import ButtonComponent from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputCompo from '../components/inputcompo';
import Icon from 'react-native-vector-icons/Feather';

const Account = ({navigation}) => {
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    contactNo: '',
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingHorizontal: 25}}>
          <HeaderComponent navigation={navigation} />
        </View>
        <View style={styles.mainbg}>
          <View style={styles.bg}>
            <Avatar.Image
              size={90}
              style={{}}
              source={Assets.logos.avatarPlaceholder}
            />
            <View style={styles.plusicon}>
              <Icon name="#000" color={'#fff'} />
            </View>
          </View>

          <View style={{paddingTop: 55}}>
            <Text style={styles.text1}>First Name</Text>
            <InputCompo
              iconname1="user"
              placeholder="david@gmail.com"
              text={data.contactNo}
              setText={setData}
              formKey="email"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />

            <Text style={styles.text1}>Last Name</Text>
            <InputCompo
              //   icon1={true}
              iconname1="user"
              placeholder="Michael"
              text={data.fullName}
              setText={setData}
              formKey="fullName"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />

            <View style={{marginVertical: 10}} />
            <Text style={styles.text1}>Email</Text>
            <InputCompo
              //   icon1={true}
              iconname1="mail"
              placeholder="david@gmail.com"
              text={data.contactNo}
              setText={setData}
              formKey="email"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />
            <View style={{marginVertical: 10}} />
            <Text style={styles.text1}>Phone</Text>

            <InputCompo
              //   icon1={true}
              iconname1="phone"
              placeholder="(211)3198396"
              text={data.email}
              setText={setData}
              formKey="contactNo"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />
            <View style={{marginVertical: 10}} />
            <Text style={styles.text1}>password</Text>
            <InputCompo
              icon2
              iconname2={'eye'}
              iconname1="lock"
              placeholder="Password"
              text={data.password}
              setText={setData}
              formKey="password"
              textColor={Colors.primary}
              backgroundColor={'#FFFFFF'}
            />
            <View style={{marginVertical: 10}} />
          </View>
          <View
            style={{
              //   marginTop: 25,
              alignSelf: 'center',
              paddingBottom: 10,
            }}>
            <ButtonComponent
              borderRadius={10}
              buttonText="Sign Up"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              onPress={() => navigation.goBack()}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 375 ? 325 : 355}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Account;
const HeaderComponent = ({navigation}) => {
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
        icon="chevron-left"
        color={Colors.tertiary}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.headertext, {color: Colors.secondary}]}>
        My Profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    // paddingHorizontal: 25,
  },
  mainbg: {
    backgroundColor: '#ffff',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 15,
    marginTop: 45,
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
  headertext: {
    marginLeft: 5,
    fontSize: 22,
    color: Colors.tertiary,
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 22,
    color: Colors.tertiary,
    textAlign: 'center',
    // letterSpacing: 0.9,
  },
  content: {
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.bgColors.grey,
    shadowColor: Colors.bgColors.grey,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bg: {
    height: WIDTH < 390 && WIDTH >= 375 ? 90 : WIDTH < 375 ? 90 : 100,
    position: 'absolute',
    top: WIDTH < 390 && WIDTH >= 375 ? -5 : WIDTH < 375 ? -40 : -50,
    right: WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? 140 : 150,
    zIndex: 10,
  },
  text1: {
    marginLeft: 5,
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'left',
  },
  plusicon: {
    backgroundColor: '#C3C3C3',
    width: 29,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    left: 70,
    top: 40,
  },
});
