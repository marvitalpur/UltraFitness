import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {WIDTH} from '../assets/constants/Dimensions';
import {Colors} from '../assets/constants/Colors';
import {Fonts} from '../assets/constants/Fonts';

const Dropdow = ({placeholder}) => {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <View style={styles.inputBtn}>
      <SelectList
        style={{
          backgroundColor: '#fafa',
          borderWidth: 0,
          borderColor: 'transparent',
        }}
        placeholder={placeholder}
        search={false}
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
      />
    </View>
  );
};

export default Dropdow;

const styles = StyleSheet.create({
  inputBtn: {
    // width: WIDTH / 2.5,
    // height: 50,
    borderRadius: 10,
    paddingLeft: 5,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
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
  btnText: {
    fontSize: 14,
    fontFamily: Fonts.default,
    fontWeight: '200',
  },
});
