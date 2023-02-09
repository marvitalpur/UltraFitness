import {StyleSheet, Text, View} from 'react-native';
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

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
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
            marginTop: 25,
          }}>
          <TouchableRipple
            style={{
              flex: 1,
              backgroundColor: Colors.cards.lightBlue,
              borderRadius: 20,
            }}
            onPress={() => console.log('hi')}>
            <Text>asasa</Text>
          </TouchableRipple>
          <View style={{width: 20}} />
          <View style={{backgroundColor: 'yellow', flex: 1}}></View>
        </View>
      </View>
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
});
