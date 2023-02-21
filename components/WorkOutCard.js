import {
  Image,
  ImageBackground,
  index,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {Fonts} from '../assets/constants/Fonts';
import {WIDTH} from '../assets/constants/Dimensions';
const WorkOutCard = ({
  index,
  WorkoutImage,
  WorkoutName,
  WorkoutTime,
  backgroundColor,
  DescriptionText,
  textcolor,
  height,
  boxtext,
}) => {
  return (
    <View style={[]}>
      <View style={styles.header}></View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          // padding: 15,
          paddingLeft: 25,
          paddingBottom: 10,
        }}
        ItemSeparatorComponent={<View style={{paddingHorizontal: 15}} />}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.card,
              {
                height: height,
                backgroundColor: item.backgroundColor,
                marginRight: index % 2 == 0 ? 5 : 0,
                marginLeft: index % 2 == 0 ? 0 : 5,
              },
            ]}>
            <View style={[styles.productImage, {paddingBottom: 10}]}>
              <Image
                source={item.WorkoutImage}
                resizeMode="contain"
                style={{
                  width: WIDTH / 9.5,
                  height: WIDTH / 9.5,

                  marginRight: 'auto',
                }}
              />
            </View>
            <View
              style={{
                height: '55%',
                alignContent: 'center',
                paddingTop: 15,
                marginRight: index % 2 == 2 ? 0 : 25,
                marginLeft: index % 2 == 0 ? 0 : 15,
              }}>
              <Text numberOfLines={1} style={styles.productName}>
                {item.WorkoutName}
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.productName, {color: '#AAA', fontSize: 14}]}>
                {item.WorkoutTime}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default WorkOutCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // width: 142,
    // height: 178,
    // backgroundColor: 'red',
    // backgroundColor: '#FFFFFF',
    flex: 1,
    height: 175,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  productName: {
    paddingTop: 15,
    // paddingLeft: -10,
    width: '100%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#000',
  },
});
const data = [
  {
    id: 1,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/dumbbell.png'),
    backgroundColor: '#eaeaea',
  },
  {
    id: 2,
    WorkoutName: 'Running',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/running.png'),
    backgroundColor: '#ECF9FF',
  },
  {
    id: 3,
    WorkoutName: 'Food',
    WorkoutTime: '1320 Kcal',
    WorkoutImage: require('../assets/images/Imap-food.png'),
    backgroundColor: '#E7C6C6',
  },
  {
    id: 4,
    WorkoutName: 'Workout',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/dumbbell.png'),
    backgroundColor: '#eaeaea',
  },
  {
    id: 5,
    WorkoutName: 'Running',
    WorkoutTime: '02 Hours',
    WorkoutImage: require('../assets/images/running.png'),
    backgroundColor: '#ECF9FF',
  },
];
