import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ButtonComponent from '../components/Button';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {Avatar} from 'react-native-paper';
import Assets from '../assets';
import {Fonts} from '../assets/constants/Fonts';
import MyCalendar from '../components/MyCalendar';

const InstructorDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <Header
            headercompo1
            navigation={navigation}
            headertex="Instructor Details"
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Avatar.Image
                size={90}
                style={{}}
                source={Assets.logos.avatarPlaceholder}
              />
              <View style={{paddingLeft: 10, marginTop: 25, paddingRight: 5}}>
                <Text style={styles.text}>Kelvin Cole</Text>
                <Text
                  style={[
                    styles.text,
                    {
                      letterSpacing: 0.6,
                      fontSize: 12,
                      fontWeight: '300',
                      opacity: 0.33,
                    },
                  ]}>
                  @kelvincole
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 15}}>
              <ButtonComponent
                // icon1
                btnfonSize={WIDTH <= 375 ? 12 : 14}
                borderRadius={14}
                buttonText="Book Now"
                buttonColor={Colors.primary}
                textColor={Colors.secondary}
                onPress={() => navigation.navigate('BookingDetail')}
                // onPress={() => navigation.navigate('InstructorDetails')}
                height={WIDTH <= 375 ? 55 : 55}
                width={WIDTH <= 323 ? 90 : 127}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              //   backgroundColor: 'red',
              marginTop: 15,
            }}>
            <Text style={styles.text}>Description:</Text>
            <Text
              style={[
                styles.text,
                {
                  lineHeight: 14,
                  fontFamily: Fonts.default,
                  fontSize: WIDTH <= 375 ? 10 : 12,
                  fontWeight: 200,
                  color: Colors.tertiary,
                  marginTop: 0,
                  paddingTop: 10,
                },
              ]}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est..
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
            }}>
            <View style={{}}>
              <Text style={styles.text}>Schedule:</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                paddingBottom: 10,
                // paddingLeft: 5,
                flexDirection: 'row',
                // justifyContent: 'space-around',
              }}>
              <View style={[styles.btn, {marginRight: 10}]}>
                <Text style={styles.text1}>5:30 PM to7::30 PM</Text>
              </View>
              <View style={styles.btn}>
                <Text style={styles.text1}>5:30 PM to7::30 PM</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <MyCalendar />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstructorDetails;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.default,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.tertiary,
    letterSpacing: 0.9,
    lineHeight: 26,
  },
  text1: {
    fontSize: 10,
    color: Colors.tertiary,
  },
  btn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    elevation: 15,
  },
});
