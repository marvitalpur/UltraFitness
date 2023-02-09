import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import Lottie from 'lottie-react-native';
import Assets from '../assets';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {CloudSvg} from '../assets/svgs/HomeSvgs';
import {Fonts} from '../assets/constants/Fonts';
import {TouchableRipple} from 'react-native-paper';
import CardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from '../components/Products';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 25}}>
          <Header />
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <View style={{alignItems: 'center'}}>
              <Lottie
                source={Assets.animation.onboardAnimationSun}
                style={{
                  width: 80,
                  height: 80,
                  marginBottom: -35,
                  marginLeft: -1,
                }}
                autoPlay
                loop
              />
              <CloudSvg />
            </View>
            <View
              style={{flex: 1, justifyContent: 'space-evenly', marginLeft: 10}}>
              <Text style={styles.text}>Good</Text>
              <Text style={styles.text}>Morning!</Text>
              <Text
                style={[
                  styles.text,
                  {letterSpacing: 0.6, fontSize: 12, fontWeight: '300'},
                ]}>
                23 December 2023
              </Text>
            </View>
          </View>
          {/* Cards start */}
          <View
            style={{
              // backgroundColor: 'red',
              height: HEIGHT / 4.5,
              flexDirection: 'row',
              marginTop: 45,
            }}>
            <TouchableRipple
              style={{
                flex: 1,
                backgroundColor: Colors.cards.lightBlue,
                borderRadius: 20,
              }}
              onPress={() => console.log('hi')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  height: '100%',
                  paddingLeft: WIDTH < 375 ? 5 : 10,
                  paddingBottom: WIDTH < 375 ? 10 : 15,
                }}>
                <Text
                  numberOfLines={2}
                  style={{
                    width: '70%',
                    //   fontSize: 18,
                    color: Colors.primary,
                    fontFamily: Fonts.default,
                    fontWeight: '700',
                    letterSpacing: 0.9,
                  }}>
                  Sports Vision Training
                </Text>
                <Image
                  source={Assets.cards.cardImage}
                  resizeMode="contain"
                  style={{
                    height: WIDTH < 375 ? 150 : 250,
                    position: 'absolute',
                    top: WIDTH < 375 ? -15 : -35,
                    right: WIDTH < 375 ? -105 : -85,
                  }}
                />
              </View>
            </TouchableRipple>
            <View style={{width: 20}} />
            <View style={{flex: 1}}>
              <TouchableRipple style={styles.bannerSmallBox}>
                <ImageBackground
                  source={Assets.backgroundImages.cardBackground1}
                  resizeMode="cover"
                  style={styles.image}>
                  <CardIcon
                    style={{marginLeft: 'auto'}}
                    name={'play-circle-outline'}
                    size={WIDTH < 375 ? 20 : 30}
                    color={Colors.tertiary}
                  />
                  <Text
                    style={{
                      marginTop: 'auto',
                      fontFamily: Fonts.default,
                      fontSize: WIDTH < 375 ? 12 : 14,
                      fontWeight: '400',
                    }}>
                    Training
                  </Text>
                </ImageBackground>
              </TouchableRipple>
              <View style={{height: 20}} />
              <TouchableRipple style={styles.bannerSmallBox}>
                <ImageBackground
                  source={Assets.backgroundImages.cardBackground2}
                  resizeMode="cover"
                  style={styles.image}>
                  <CardIcon
                    style={{marginLeft: 'auto'}}
                    name={'play-circle-outline'}
                    size={WIDTH < 375 ? 20 : 30}
                    color={Colors.tertiary}
                  />
                  <Text
                    style={{
                      marginTop: 'auto',
                      fontFamily: Fonts.default,
                      fontSize: WIDTH < 375 ? 12 : 14,
                      fontWeight: '400',
                    }}>
                    Testing
                  </Text>
                </ImageBackground>
              </TouchableRipple>
            </View>
          </View>
        </View>

        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  bannerSmallBox: {backgroundColor: 'red', flex: 1, borderRadius: 20},
  image: {flex: 1, padding: WIDTH < 375 ? 5 : 10},
});
