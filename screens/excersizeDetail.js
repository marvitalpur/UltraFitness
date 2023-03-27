import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { FlatList } from 'react-native';
import SessionCompo from '../components/SessionsComponent';
import { Colors } from '../assets/constants/Colors';
import Assets from '../assets';
import { HEIGHT } from '../assets/constants/Dimensions';

const ExcersizeDetail = ({ navigation, route }) => {
  const { image1 } = route.params;
  const { Exname } = route.params;

  var data1 = [
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.cards.Ex1,
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
  ]

  var data = [
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.cards.Ex1,
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.cards.Ex1,
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },
    {
      progressName: 'Social Interection',
      backgroundColor: '#FBBF76',
      backgroundColor1: '#486B81',
      backgroundColor2: '#EC8117',
      image1: Assets.cards.Ex1,
      progressName: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
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
            <Header navigation={navigation} headertex="Details" backIcon1 />
          </View>
          <View
            style={{
              // height: 200,

              marginTop: 20,

              // backgroundColor: 'red',
              // paddingHorizontal: 15,
            }}>
            <FlatList
              data={data1}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
                paddingHorizontal: 15,

              }}
              ItemSeparatorComponent={<View style={{}} />}
              renderItem={({ item, index }) => (
                <SessionCompo
                  ExerciseCompo
                  index={index}
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                  backgroundColor1={item.backgroundColor1}
                  backgroundColor2={item.backgroundColor2}
                  progressName={item.progressName}
                  textColor={item.textcolor}
                  progressColor={item.progressColor}
                  progresstextColor={item.backgroundColor}
                  image={item.image1}
                  onPress={item.onPress}
                />
              )}></FlatList>
            <View style={{ paddingTop: 10 }}>
              <FlatList
                data={data}

                contentContainerStyle={{ marginTop: 20 }}
                renderItem={({ item, index }) =>
                (
                  <SessionCompo playcompo
                    image={item.image1}
                  />)
                }></FlatList>
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

export default ExcersizeDetail;
