import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants/Colors';
import Header from '../components/Header';
import {Fonts} from '../assets/constants/Fonts';
import {Checkbox, FAB, TouchableRipple} from 'react-native-paper';
import Assets from '../assets';
import {WIDTH} from '../assets/constants/Dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddcardScreen = ({navigation}) => {
  const [checked, setChecked] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View>
          <View style={{paddingHorizontal: 15, marginTop: 25}}>
            <HeaderComponent navigation={navigation} />
          </View>
          <View
            style={{
              height: '40%',
              marginTop: 25,
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Checkbox
              uncheckedColor={Colors.primary}
              size={12}
              color={Colors.primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={Assets.ProfileImages.card3}
              resizeMode="contain"
              style={{
                height:
                  WIDTH < 390 && WIDTH >= 375 ? 240 : WIDTH < 375 ? 240 : 240,
                position: 'absolute',
                top:
                  WIDTH < 390 && WIDTH >= 375 ? -24 : WIDTH < 375 ? -24 : -24,
                left:
                  WIDTH < 390 && WIDTH >= 375
                    ? -170
                    : WIDTH < 375
                    ? -365
                    : -350,
                // right:
                //   WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -320 : -390,
                zIndex: 10,
              }}
            />
          </View>
          <View
            style={{
              // marginTop: 25,
              flexDirection: 'row',
              paddingHorizontal: 15,
            }}>
            <Checkbox
              uncheckedColor={Colors.primary}
              size={12}
              color={Colors.primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={Assets.ProfileImages.card3}
              resizeMode="contain"
              style={{
                height:
                  WIDTH < 390 && WIDTH >= 375 ? 195 : WIDTH < 375 ? 240 : 240,
                position: 'absolute',
                top:
                  WIDTH < 390 && WIDTH >= 375 ? -20 : WIDTH < 375 ? -20 : -20,
                left:
                  WIDTH < 390 && WIDTH >= 375
                    ? -170
                    : WIDTH < 375
                    ? -365
                    : -350,
                // right:
                //   WIDTH < 390 && WIDTH >= 375 ? -170 : WIDTH < 375 ? -320 : -390,
                zIndex: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderComponent = ({navigation}) => {
  return (
    <View style={[styles.headerContainer, {backgroundColor: 'red'}]}>
      <View style={{flexDirection: 'row'}}>
        <FAB
          style={[
            styles.fab,
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
        <Text>Cards</Text>
      </View>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image source={Assets.logos.blueSmall} />
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  boldtext: {
    textAlign: 'center',
    padding: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fab: {
    height: 50,
    width: 50,
    borderRadius: 10,
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
});

export default AddcardScreen;
