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
      style={{
        backgroundColor: props.backgroundColor,
        padding: 2.5,
        flex: 1,
        borderRadius: 10,
        marginRight: index % 5 == 2 ? 0 : 3,
        marginLeft: index % 5 == 0 ? 0 : 3,
      }}>
      <View
        style={[
          styles.card,
          {
            // marginTop: 5,
            // marginBottom: 5,
            backgroundColor: props.backgroundColor,
            // marginRight: index % 5 == 2 ? 0 : 4,
            // marginLeft: index % 5 == 0 ? 0 : 4,
          },
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // width: 100,
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
    </View>
  );
};

export default CardLG;

const styles = StyleSheet.create({
  card: {
    // width: '90%',
    flex: 1,
    height: 46,
    // backgroundColor: '#FFFFFF',
    padding: 2,
    borderRadius: 10,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 15,
  },
  productImage: {
    // height: '50%',
    paddingHorizontal: 5,
  },
  productName: {
    paddingHorizontal: 5,
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
});
