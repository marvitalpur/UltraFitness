import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Images from '../assets';
import {BackgroundOverlay} from '../assets/svgs/OnboardSvg';
import {Button} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

const Onboarding = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.background.onboard}
      resizeMode="cover"
      style={styles.image}>
      <View
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
        <BackgroundOverlay />
      </View>
      <Button
        icon="arrow-right"
        mode="contained"
        buttonColor={Colors.secondary}
        textColor={Colors.primary}
        contentStyle={{
          flexDirection: 'row-reverse',
        }}
        onPress={() => navigation.navigate('Login')}>
        Next
      </Button>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
