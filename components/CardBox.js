import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Fonts} from '../assets/constants/Fonts';

const CardBox = props => {
  return (
    <View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          padding: 10,
          paddingLeft: 5,
        }}
        ItemSeparatorComponent={<View style={{marginVertical: 5}} />}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: item.backgroundColor,
                marginRight: index % 2 == 2 ? 0 : 10,
                marginLeft: index % 2 == 0 ? 0 : 15,
              },
            ]}>
            <View style={{alignContent: 'center'}}>
              <Text
                numberOfLines={1}
                style={[styles.productName, {color: item.textcolor}]}>
                {item.name}
              </Text>
            </View>
          </View>
        )}></FlatList>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  card: {
    // width: 46,
    flex: 1,
    height: 46,
    // backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  productImage: {
    height: '45%',
  },
  productName: {
    // marginVertical: 8,
    width: '70%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
});

var data = [
  {
    name: 'Homework Assistance',
    backgroundColor: '#FADDBA',
    textcolor: '#F2AC57',
  },
  {
    name: 'Social Interaction',
    backgroundColor: '#C7EEF8',
    textcolor: '#00B4D8',
  },
  {
    name: 'Skill Development',
    backgroundColor: '#E7C6C6',
    textcolor: '#E9A6A6',
  },
];
