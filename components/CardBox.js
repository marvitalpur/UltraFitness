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

const CardBox = props => {
  return (
    <View
      style={[
        styles.card,
        {
          paddingBottom: 10,
          backgroundColor: props.backgroundColor,
          marginRight: index % 5 == 2 ? 0 : 4,
          marginLeft: index % 5 == 0 ? 0 : 4,
        },
      ]}>
      <View
        style={{
          height: '55%',
          alignContent: 'center',
          flexDirection: props.flexDirection,
          justifyContent: 'space-around',
          marginTop: 5,
        }}>
        <Text
          numberOfLines={2}
          style={[
            styles.productName,
            {color: props.textcolor, paddingHorizontal: 5},
          ]}>
          {props.name}
        </Text>
        {props.ItemImage && (
          <View style={styles.productImage}>{props.image}</View>
        )}
      </View>
    </View>
  );
};

export default CardBox;

const styles = StyleSheet.create({
  card: {
    // width: '90%',
    flex: 1,
    height: 46,
    // backgroundColor: '#FFFFFF',
    padding: 3,
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

    elevation: 10,
  },
  productImage: {
    height: '40%',
    paddingHorizontal: 5,
  },
  productName: {
    paddingHorizontal: 5,
    width: '55%',
    fontFamily: Fonts.default,
    fontWeight: '600',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    color: '#ffff',
  },
});
