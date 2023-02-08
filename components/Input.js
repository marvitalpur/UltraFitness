import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '../assets/constants/Colors';

const Input = ({text, setText, placeholder}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={text}
      onChangeText={text => setText(text)}
      activeUnderlineColor="transparent"
      underlineColor="transparent"
      selectionColor="#000"
      placeholderTextColor={Colors.primary}
      theme={{roundness: 10}}
      style={{
        height: 50,
        opacity: text.length < 1 ? 0.5 : 1,
        fontSize: 14,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
        shadowColor: Colors.tertiary,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
