import {
  Dimensions,
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import {HEIGHT, WIDTH} from '../assets/constants/Dimensions';
import {Fonts} from '../assets/constants/Fonts';
import ButtonComponent from '../components/Button';
import Input from '../components/Input';
import MapView, {Marker} from 'react-native-maps';
import {CheckBox, Icon} from '@rneui/themed';

const GoogleMapsScreen = ({navigation}) => {
  const [data, setData] = useState({
    fullName: '',
    contactNo: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [check4, setCheck4] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 25}}>
          <Header headercompo1 navigation={navigation} />
          <View style={{width: 200, height: 100}}></View>
          {/* Cards start */}
          <View style={{}}>
            <View style={styles.Mapcontainer}>
              <MapView
                style={styles.map}
                region={region}
                onRegionChange={setRegion}>
                <Marker
                  coordinate={{latitude: 37.78825, longitude: -122.4324}}
                />
              </MapView>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="Full Name"
              text={data.fullName}
              setText={setData}
              formKey="fullName"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="Address"
              text={data.fullName}
              setText={setData}
              formKey="Address"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="Zip code "
              text={data.fullName}
              setText={setData}
              formKey="Zip Code"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="City"
              text={data.fullName}
              setText={setData}
              formKey="city"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="state"
              text={data.fullName}
              setText={setData}
              formKey="state"
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="phone number "
              text={data.fullName}
              setText={setData}
              formKey="phone number "
            />
          </View>
          <View style={{marginTop: 25}}>
            <Input
              placeholder="Email"
              text={data.fullName}
              setText={setData}
              formKey="Email"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            // flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
          }}>
          <Text style={styles.text}>Payment Method</Text>
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
            buttonText="Proceed to Checkout"
            buttonColor={Colors.tertiary}
            textColor={Colors.secondary}
            onPress={() => navigation.goBack()}
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
    fontWeight: 'bold',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  map: {
    width: WIDTH <= 335 ? 200 : 300,
    height: WIDTH <= 335 ? 200 : 100,
  },
});

export default GoogleMapsScreen;
