import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

const Radiobutton = ({checked, setChecked, onPress}) => {
  //   const [checked, setChecked] = useState();
  return (
    <View>
      <RadioButton
        color={Colors.primary}
        value="first"
        status={checked === true ? 'unchecked' : 'checked'}
        onPress={onPress}
      />
    </View>
  );
};

export default Radiobutton;

const styles = StyleSheet.create({});
