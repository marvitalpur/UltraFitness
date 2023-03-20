import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import Assets from '../assets';
import {Colors} from '../assets/constants/Colors';

const QRScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 25}}>
          <Header headertex={'QR Code'} navigation={navigation} />
          <View style={styles.textView}>
            <Image
              source={Assets.backgroundImages.QRcode}
              resizeMode="contain"
              style={{borderRadius: 15, width: '100%'}}
            />
          </View>
          <View style={{marginTop: 25}}>
            <Text style={styles.Text}>
              Scan QR Code for {'\n'}booking appointment
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.secondary},
  Text: {
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.49,
    color: Colors.tertiary,
  },
  textView: {
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: Colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
