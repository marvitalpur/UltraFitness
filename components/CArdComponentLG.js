import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  index,
  Image,
} from 'react-native';
import React from 'react';
import {Fonts} from '../assets/constants/Fonts';
import {WIDTH} from '../assets/constants/Dimensions';

const CardLG = props => {
  return (
    <View
      style={[
        styles.card,
        {
          shadowColor: props.backgroundColor,
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: props.backgroundColor,
          marginRight: index % 5 == 2 ? 0 : 4,
          marginLeft: index % 5 == 0 ? 0 : 4,
        },
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: props.Wbox ? 'center' : 'center',
          justifyContent: props.Wbox ? 'center' : 'flex-start',
          // width: 100,
          padding: 5,
          // paddingLeft: 8,
        }}>
        <View style={{flex: 1, flexWrap: 'wrap'}}>
          <Text
            numberOfLines={2}
            style={[styles.productName, {color: props.textcolor}]}>
            {props.name}
          </Text>
        </View>
        {props.ItemImage && (
          <View style={styles.productImage}>{props.image}</View>
        )}
      </View>
    </View>
  );
};

export default CardLG;

const styles = StyleSheet.create({
  card: {
    // width: '90%',
    flex: 1,
    height: 46,
    backgroundColor: 'red',
    padding: 1,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },

    elevation: 5,
  },
  productImage: {
    // height: '50%',
    // paddingHorizontal: 5,
  },
  productName: {
    // textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
});
