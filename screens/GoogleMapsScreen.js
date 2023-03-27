import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import Input from '../components/Input';
import MapView, {Marker} from 'react-native-maps';
import Radiobutton from '../components/Radiobutton';

const GoogleMapsScreen = ({navigation}) => {
  const [checked, setChecked] = useState();
  const [data, setData] = useState({
    fullName: '',
    contactNo: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [region, setRegion] = useState({
    latitude: 77.78825,
    longitude: 122.324,
    latitudeDelta: 2.0922,
    longitudeDelta: 8.0421,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 25}}>
          <Header
            navigation={navigation}
            onlybackbutton
            backIcon
            headertex={'Details'}
          />
          {/* Cards start */}
          <View style={styles.Mapcontainer}>
            <MapView
              style={styles.map}
              region={region}
              onRegionChange={setRegion}>
              <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
            </MapView>
          </View>
          <View style={{marginTop: 25}} />
          <Input
            placeholder="Full Name"
            text={data.fullName}
            setText={setData}
            formKey="fullName"
            textColor={Colors.tertiary}
          />
          <View style={{marginTop: 25}} />
          <Input
            placeholder="Address"
            text={data.fullName}
            setText={setData}
            formKey="Address"
            textColor={Colors.tertiary}
          />
          <View style={{marginTop: 25}} />
          <Input
            placeholder="Zip code "
            text={data.fullName}
            setText={setData}
            formKey="Zip Code"
            textColor={Colors.tertiary}
          />
          <View style={{marginTop: 25}}>
            <Input
              placeholder="City"
              text={data.fullName}
              setText={setData}
              formKey="city"
              textColor={Colors.tertiary}
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="state"
              text={data.fullName}
              setText={setData}
              formKey="state"
              textColor={Colors.tertiary}
            />
          </View>
          <View style={{marginTop: 25}} />
          <Input
            placeholder="phone number "
            text={data.fullName}
            setText={setData}
            formKey="phone number "
            textColor={Colors.tertiary}
          />
          <View style={{marginTop: 25}} />
          <View
            style={
              {
                // flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-between',
              }
            }>
            <Input
              gender={true}
              text={data.gender}
              setText={setData}
              formKey="gender"
              textColor={Colors.primary}
              Valueinput={'State'}
            />
          </View>
          <View style={{marginTop: 25}} />
          <Input
            placeholder="Email"
            text={data.fullName}
            setText={setData}
            formKey="Email"
            textColor={Colors.tertiary}
          />
        </View>
        <View
          style={{
            marginTop: 25,
            // flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <Text style={styles.text}>Payment Method</Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Radiobutton
              onPress={() => setChecked(!checked)}
              checked={checked}
              setChecked={setChecked}
            />
            <Text
              style={[
                styles.text,
                {fontSize: 14, color: '#4A4A4A', paddingTop: 8},
              ]}>
              Credit Card
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Radiobutton
              onPress={() => setChecked(!checked)}
              checked={checked}
              setChecked={setChecked}
            />
            <Text
              style={[
                styles.text,
                {fontSize: 14, color: '#4A4A4A', paddingTop: 8},
              ]}>
              Debit Card
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <ButtonComponent
            borderRadius={14}
            buttonText="Continue"
            buttonColor={Colors.tertiary}
            textColor={Colors.secondary}
            onPress={() => navigation.navigate('CheckoutCart')}
            height={WIDTH <= 375 ? 55 : 55}
            width={WIDTH <= 323 ? 260 : 300}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  text: {
    fontFamily: Fonts.default,

    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
  boldtext: {
    textAlign: 'center',
    padding: 5,
  },
  Mapcontainer: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',

    marginTop: 20,
    padding: 10,
  },
  map: {
    width: WIDTH <= 335 ? 345 : 320,
    height: WIDTH <= 335 ? 345 : 300,
  },
});

export default GoogleMapsScreen;
