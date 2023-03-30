import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import {Colors} from '../assets/constants/Colors';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = ({navigation}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: WIDTH,
            height: HEIGHT / 2.5,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: WIDTH < 375 ? 70 : 80,
              height: WIDTH < 375 ? 70 : 80,
              position: 'absolute',
              right: 30,
              top: -15,
            }}>
            <Lottie
              source={Assets.animation.onboardAnimationSun}
              style={{
                width: WIDTH < 375 ? 70 : 80,
                height: WIDTH < 375 ? 70 : 80,
              }}
              autoPlay
              loop
            />
          </View>
          <Lottie
            source={Assets.animation.loginAnimation}
            style={{width: WIDTH, height: HEIGHT / 2.5}}
            autoPlay
            loop
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Login</Text>
            <Image
              style={styles.logo}
              source={Assets.logos.blueSmall}
              resizeMode="contain"
            />
          </View>
          <View style={{marginVertical: 5}} />
          <Input
            placeholder="Username"
            text={data.username}
            setText={setData}
            formKey="username"
            textColor={Colors.primary}
          />
          <View style={{marginVertical: 15}} />
          <Input
            placeholder="Password"
            text={data.password}
            setText={setData}
            formKey="password"
            textColor={Colors.primary}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setRememberMe(!rememberMe)}>
              <Icon
                name={rememberMe ? 'check-square' : 'square'}
                size={20}
                color={rememberMe ? Colors.primary : Colors.tertiary}
              />
              <Text style={[styles.text, {marginLeft: 5}]}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text
                style={[
                  styles.text,
                  {textDecorationLine: 'underline', color: Colors.primary},
                ]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <ButtonComponent
              btnfonSize={16}
              borderRadius={50}
              buttonText="Login"
              buttonColor={Colors.primary}
              textColor={Colors.secondary}
              onPress={() => navigation.navigate('Drawer')}
              height={WIDTH <= 375 ? 40 : 55}
              width={WIDTH <= 375 ? 125 : 175}
            />
            <Text style={[styles.text, {color: Colors.tertiary, opacity: 0.5}]}>
              Or
            </Text>
            <TouchableOpacity
              style={[styles.touchable, {width: 175}]}
              onPress={() => navigation.navigate('Signup')}>
              <Text
                style={[
                  styles.text,
                  {textDecorationLine: 'underline', color: Colors.primary},
                ]}>
                Create Your Account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  loginText: {
    fontSize: WIDTH <= 375 ? 25 : 30,
    fontFamily: Fonts.default,
    fontWeight: '700',
    marginRight: 2.5,
  },
  contentContainer: {flex: 1, paddingHorizontal: 25},
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    left: 40,
  },
  logo: {
    width: WIDTH <= 375 ? 45 : 50,
    height: WIDTH <= 375 ? 45 : 50,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.default,
    fontWeight: '200',
    letterSpacing: 0.7,
    color: Colors.tertiary,
  },
});
