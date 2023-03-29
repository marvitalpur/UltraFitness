import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { FlatList } from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import Assets from '../assets';
import { HEIGHT, WIDTH } from '../assets/constants/Dimensions';
import Accordion1 from '../components/accordion1';

const AssismentScreen = ({ navigation, route }) => {
  var data = [
    {

      backgroundColor: '#FF9B9B',
      backgroundColor1: '#E69898',

    },
    {

      backgroundColor: '#4979BC',
      backgroundColor1: '#4979BC',

    },
    {

      backgroundColor: '#FBBF76',
      backgroundColor1: '#FBBF76',
    },
    {

      backgroundColor: '#AABCC0',
      backgroundColor1: '#AABCC0',

    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ paddingHorizontal: 15 }}>
            <Header navigation={navigation} headertex="Fitness Assesment" backIcon1 />
          </View>
          <View
            style={{
              marginTop: 25,
            }}>
            <View style={{}}>
              <FlatList
                data={data}
                contentContainerStyle={{}}
                renderItem={({ item, index }) => (
                  <View style={{ paddingHorizontal: 10 }}>
                    <View
                      style={{
                        // height: 200,
                        marginTop: 25,
                        // backgroundColor: 'red',
                      }}>
                      <Accordion1 backgroundColor={item.backgroundColor} backgroundColor1={item.backgroundColor1} />
                    </View>
                  </View>
                )}></FlatList>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    // fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 18,
    // color: Colors.tertiary,
    color: '#000',
    letterSpacing: 0.9,
  },
});

export default AssismentScreen;














// <SessionCompo
//   Assisment1
//   height={
//     WIDTH < 390 && WIDTH >= 375
//       ? 125
//       : WIDTH < 375
//         ? 135
//         : 100
//   }
//   top={
//     WIDTH < 390 && WIDTH >= 375
//       ? -35
//       : WIDTH < 375
//         ? -10
//         : -10
//   }
//   right={
//     WIDTH < 390 && WIDTH >= 375
//       ? -100
//       : WIDTH < 375
//         ? -100
//         : -100
//   }
//   // image={image1}
//   // text1={Exercisename1}
//   // text2={Exercisename2}
//   backgroundColor="#FBBF76"
//   backgroundColor1="#486B81"
//   backgroundColor2="#EC8117"
// />