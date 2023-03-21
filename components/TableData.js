import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';

const Table = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.boldtext, {fontWeight: 'bold'}]}>
          Product Name
        </Text>
        <Text style={[styles.cell, styles.boldtext, {textAlign: 'center'}]}>
          Quantity
        </Text>
        <Text style={[styles.cell, styles.boldtext, {fontWeight: 'bold'}]}>
          Price
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell]}>Product #1</Text>
        <Text style={[styles.cell, {textAlign: 'center'}]}>02</Text>
        <Text style={[styles.cell]}>$100</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell]}>Product #1</Text>
        <Text style={[styles.cell, {textAlign: 'center'}]}>01</Text>
        <Text style={[styles.cell]}>Price</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell]}>Delivery Charges</Text>
        <Text style={[styles.cell]}></Text>
        <Text style={[styles.cell, {textAlign: 'left'}]}>15.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    // borderWidth: 1,
    borderColor: '#000',
    // margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cell: {
    flex: 1,
    // padding: 10,
    // borderRightWidth: 1,
    borderRightColor: '#000',

    // borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  boldtext: {
    fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 16,
    color: Colors.tertiary,
    letterSpacing: 0.9,
  },
});

export default Table;
